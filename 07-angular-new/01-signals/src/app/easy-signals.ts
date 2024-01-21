let activeConsumer: EasyConsumer | null = null;

const nodeKey = '_node';
const defaultEqual: EasySignalNode<any>['equal'] = (firstValue, secondValue) => firstValue == secondValue;

type EasySignal<T> = (() => T);

interface EasyConsumer {
    update: () => void;
}

interface EasySignalNode<T> {
    value: T;
    dependentConsumer: EasyConsumer[];
    equal: (firstValue: T, secondValue: T) => boolean;
}

interface EasyWritableSignal<T> extends EasySignal<T> {
    set(value: T): void;
    [nodeKey]: EasySignalNode<T>;
}

export function easySignal<T>(initialValue: T, equalFn?: EasySignalNode<T>['equal']): EasyWritableSignal<T> {
    const node: EasySignalNode<T> = {
        value: initialValue,
        dependentConsumer: [],
        equal: equalFn || defaultEqual,
    };

    function signalFn() {
        if (activeConsumer) {
            node.dependentConsumer.push(activeConsumer);
        }

        return node.value;
    }

    signalFn[nodeKey] = node;
    signalFn.set = signalSetFn;

    return signalFn;
}

function signalSetFn<T>(this: EasyWritableSignal<T>, newValue: T) {
    const node = this[nodeKey];

    if (!node.equal(node.value, newValue)) {
        node.value = newValue;

        signalValueChanged(node);
    }
}

function signalValueChanged<T>(node: EasySignalNode<T>): void {
    node.dependentConsumer.forEach(consumer => {
        consumer.update();
    })
}

export function easyEffect(effectFn: () => void): void {
    const consumer: EasyConsumer = {update: effectFn};

    activeConsumer = consumer;

    effectFn();

    activeConsumer = null;
}
