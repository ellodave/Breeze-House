jQuery(document).on('gform_page_loaded', function(event, form_id, current_page){
               new clickToAddress({
        accessToken: '013c4-5976f-674e3-03a60',
			  showLogo: false,
    		defaultCountry: 'gbr',
   			getIpLocation: true,
        dom: {
            search:     'input_1_13',
            town:       'input_1_5_3',
            postcode:   'input_1_5_5',
            line_1:     'input_1_5_1',
        },
        domMode: 'id'
    });
});
