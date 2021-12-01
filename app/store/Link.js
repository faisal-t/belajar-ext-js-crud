Ext.define('clasic.store.Link', {
    extend: 'Ext.data.Store',

    alias: 'store.link',

    model: 'clasic.model.Link',

    // data: { items: [
    //     {
    //         nama: 'Google',
    //         keterangan: 'Google',
    //         tipe: 'tab',
    //         judul: 'judul',
    //         url: 'https://google.com'
    //     },
    //     {
    //         nama: 'Localhost',
    //         keterangan: 'Localhost',
    //         tipe: 'window',
    //         judul: 'judul',
    //         url: 'http://localhost/'
    //     },

    // ]},

    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'http://127.0.0.1:8000/api/link',
        useDefaultXhrHeader: false,
        method: 'GET',
        reader: {
            type: 'json',
            rootProperty: 'data',
            successProperty: 'success'
        }
    }
});
