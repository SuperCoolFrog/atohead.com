const MIXINS_KEY = 'mixins';
const APPLY_MIXIN_KEY = '@mixin';


const preprocess = (data: any, _mixins: any = null) => {
    const mixins = _mixins || data[MIXINS_KEY];
    
    const keys = Object.keys(data);
    

    let updated = Array.isArray(data)
    ? [...data] 
    : {...data};
    
    keys.forEach((k) => {
        const d = data[k];
        
        switch(true) {
            case Array.isArray(d):
                updated[k] = preprocess(d, mixins);
                break;
            case typeof d === 'object':
                updated[k] = preprocess(d, mixins);
                break;
            case typeof d === 'string':
                if (k === APPLY_MIXIN_KEY) {
                    const mixinKeys = d.split(',') as string[];
                    mixinKeys.forEach((mk) => {
                        updated = {...updated, ...mixins[mk] }
                    })
                    delete updated[k];
                }
                break;
            default:
                break;
        }
    });
    
    return updated;
};

export default preprocess;