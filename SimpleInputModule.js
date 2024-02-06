const Noodl = require('@noodl/noodl-sdk');

Noodl.defineModule({
    nodes: [
        {
            name: 'SimpleInput',
            category: 'Test Module',
            color: 'blue',
            initialize: function() {
                this.outputs.value = '';
            },
            inputs: {
                setValue: function(value) {
                    this.outputs.value = value;
                    this.sendSignalOnOutput('valueChanged');
                }
            },
            outputs: {
                value: 'string',
                valueChanged: 'signal'
            }
        }
    ]
});
