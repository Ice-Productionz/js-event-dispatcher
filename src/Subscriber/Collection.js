import Subscriber from "./Subscriber";

export default class Collection {
    /**
     *
     * @param {Array} list
     */
    constructor(list)
    {
        list.forEach((item) => {
             if (!(item instanceof Subscriber)) {
                 throw new Error('array values must be extend Subscriber/Subscriber');
             }
        });
        this.list = list;
    }

    /**
     *
     * @param {Subscriber} subscriber
     */
    addSubscriber(subscriber)
    {
        if (!(subscriber instanceof Subscriber))
        {
            throw new Error('subscriber must be extend Subscriber/Subscriber');
        }
        this.list.push(subscriber);
    }
    /**
     *
     * @param {Event} event
     */
    fireEvent(event)
    {
        this.list.forEach((item) => {
            item.onDispatch(event);
        });
    }
}
