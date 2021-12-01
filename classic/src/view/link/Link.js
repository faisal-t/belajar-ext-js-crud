Ext.define('clasic.view.link.Link', {
    extend: 'Ext.window.Window',
    requires: [
        'clasic.view.link.LinkController'
    ],

    controller: 'link',
    title: 'management Localhost',
    width: '85%',
    height: '85%',
    alias: 'widget.viewlink',
    modal: true,
    layout: {
                type: 'vbox',
                align: 'stretch', 
            },

    store: 'link',

    items: [
        {
            xtype: 'gridpanel',
            title: 'Link',
            reference: 'viewLinkGrid',
            flex: 1,
             plugins: {
                cellediting: {
                    clicksToEdit: 1
                }
            },
            store: {
                type: 'link',

            },
            columns: [
                {
                    text: 'Nama',
                    flex: 1,
                    dataIndex: 'nama',
                    editor: {
                        xtype: 'textfield'
                    },
                },
                {
                    text: 'Keterangan',
                    flex: 1,
                    dataIndex: 'keterangan',
                    editor: {
                        xtype: 'textfield',
                    },
                },
                {
                    text: 'Type', //window atau tab
                    flex: 1,
                    dataIndex: 'tipe',
                    editor: {
                        xtype: 'textfield',
                    },
                },
                {
                    text: 'judul',
                    flex: 1,
                    dataIndex: 'judul',
                    editor: {
                        xtype: 'textfield',
                    },
                },
                {
                    text: 'url',
                    flex: 1,
                    dataIndex: 'url',
                    editor: {
                        xtype: 'textfield',
                    },
                },
                {
                    xtype: 'actioncolumn',
                    menuDisabled: true,
                    items: [
                        {
                            xtype: 'button',
                            iconCls: 'x-fa fa-trash',
                            handler: 'onRemoveClick'

                        },
                    ],
                },
                
            ],
            dockedItems: [
                    {
                        xtype: 'toolbar',
                        dock: 'top',
                        items: [
                            {
                                xtype: 'button',
                                iconCls: 'x-fa fa-plus',
                                handler: 'onAddClick',
                                tooltip: 'Tambah Data',
                            },
                            {
                                xtype: 'button',
                                iconCls: 'x-fa fa-save',
                                handler: 'onSaveClick',
                                tooltip: 'Simpan Data',
                            },
                            {
                                xtype: 'button',
                                iconCls: 'x-fa fa-undo',
                                handler: 'onCancelClick',
                                tooltip: 'Batal Simpan',
                            },
                        ],
                    },
                ],

           bbar: {
            xtype: 'pagingtoolbar',
            displayInfo: true,
           },     
        },
    ],




})