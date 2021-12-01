Ext.define('clasic.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'clasic.view.main.MainController',
        'clasic.store.Link',
    ],

    controller: 'main',

    items: [
        {
            xtype: 'panel',
            layout: 'center',
            height: 90,
            
            bodyStyle: {
                'background-image': 'url(https://i.pinimg.com/originals/88/15/63/881563d6444b370fa4ceea0c3183bb4c.gif)',
                'color': '#FFF',
            },            
            items: [
                {
                    xtype: 'label',
                    html: '<center>' + '<h2>Halo, Faisal ! <br></h2>' + '<h2>Selamat Datang Di Aplikasi Crud</h2>' + '</center>',
                },
            ],

        },
        {
            xtype: 'gridpanel',
            title: 'Localhost',
            itemId: 'viewMainGrid',
            store: {
                type: 'link'
            },
            tools: [
                {
                    iconCls: 'x-fa fa-user',
                    handler: 'openWindowView',
                },
            ],
            columns: [
                {
                    text: 'Nama',
                    flex: 1,
                    dataIndex: 'nama',
                },
                {
                    text: 'Keterangan',
                    flex: 2,
                    dataIndex: 'keterangan',
                },
            ],
            listeners: {
                itemclick: 'onItemClick',
            },
        }
    ],

    
});
