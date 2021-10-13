jQuery(document).ready = function() {
new clickToAddress({
    accessToken: '013c4-5976f-674e3-03a60',
    showLogo: false,
    defaultCountry: 'gbr',
    getIpLocation: true,
    dom: {
        search:     'input_5_2',
        line_1:     'input_5_1_1',
        town:       'input_5_1_3',
        postcode:   'input_5_1_5',
    },
    domMode: 'id'
});
};

new clickToAddress({
    accessToken: '013c4-5976f-674e3-03a60', // Replace this with your access token
    dom: {
        search:     'input_5_2',
        line_1:     'input_5_1_1',
        town:       'input_5_1_3',
        postcode:   'input_5_1_5'
    },
    domMode: 'id' // Use names to find form elements
});
