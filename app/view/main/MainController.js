/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('clasic.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    openWindowView: function(){
        Ext.widget('viewlink').show();
    },

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    onItemClick:function (grid, record, item, index, e, eOpts) {
        var data = record.data;
        if (data.tipe == 'tab') {
            window.open(data.url);
        }

        if (data.tipe == 'window') {
            Ext.create('Ext.window.Window',{
                title: data.judul,
                width: '90%',
                height: '90%',
                modal: true,
                items: [
                    {
                        xtype: 'component',
                        autoEl: {
                            tag: 'iframe',
                            style: {
                                width: '100%',
                                height: '100%',
                            },
                            src: data.url,
                        },
                    },
                ],
            }).show();
        }
    }
});
