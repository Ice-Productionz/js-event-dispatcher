import Collection from "./Subscriber/Collection";

export default class Dispatcher {
    /**
     * Action required event
     *
     * @param {Event} event
     */
    dispatch(event)
    {
        if (this.subscriptions.hasOwnProperty(event.getName()) === false) {
            return;
        }

        this.subscriptions[event.getName()].fireEvent(event);
    }

    /**
     *
     * @param {String} eventName
     * @param {Subscriber} subscriber
     */
    registerSubscriber(eventName, subscriber)
    {
        if (!this.subscriptions.hasOwnProperty(eventName)) {
            Object.defineProperty(this.subscriptions, eventName, {
                value: new Collection([]),
                writable: true
            });
        }

        this.subscriptions[eventName].addSubscriber(subscriber);

    }

}