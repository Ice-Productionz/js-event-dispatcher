export default class Subscriber {

    static getEventName()
    {
        throw new TypeError('Subscriber.getEventName() is not defined');
    }

    onDispatch()
    {
        throw new TypeError('Subscriber.onDispatch() is defined');
    }

}