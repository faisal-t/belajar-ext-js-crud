Ext.define('clasic.view.link.LinkController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.link',

    requires: [
        'Ext.data.Connection',
    ],

     onAddClick: function() {
           var refs = this.getReferences(),
            view = refs.viewLinkGrid,
            rec = new clasic.model.Link({
                nama: '',
                keterangan: '',
                tipe: '',
                judul: '',
                url: '',
                new: 1,
            });
         view.store.insert(0, rec);
         console.log(rec);
         view.findPlugin('cellediting').startEdit(rec, 0);
    },

    onSaveClick:function(){
        var me = this,
            refs = me.getReferences(),
            grid = refs.viewLinkGrid,
            storeMain = Ext.ComponentQuery.query('#viewMainGrid')[0].getStore(),
            store = grid.getStore(),
            rows = store.data.items;

        
        Ext.Array.each(rows, function(value){
            var data = value.data;
            if (value.dirty) {
                if (data.new != true) {
                    Ext.Ajax.request({
                    url: 'http://127.0.0.1:8000/api/link/'+data.id,
                    method: "PUT",
                    params: data,
                    success: function(response){
                        Ext.Msg.alert('Sukses Update Data');
                        store.load();
                        storeMain.load();
                    },
                    failure: function(response) {
                        Ext.Msg.alert('Error Update Data');
                    }

                });
                }else{
                    Ext.Ajax.request({
                    url: 'http://127.0.0.1:8000/api/link',
                    method: "POST",
                    params: data,
                    success: function(response){
                        Ext.Msg.alert('Sukses Simpan Data');
                        store.load();
                        storeMain.load();
                    },
                    failure: function(response) {
                        Ext.Msg.alert('Error Simpan Data');
                    }

                });
                }
            }
        });    
    },

    onCancelClick: function(){
        Ext.Msg.alert('cancle Click');
    },

    onRemoveClick: function(grid, rowIndex, colIndex) {
       var data = grid.getStore().getAt(rowIndex).data;
       var storeMain = Ext.ComponentQuery.query('#viewMainGrid')[0].getStore();
       var store = grid.getStore();
       console.log(data);
       Ext.MessageBox.confirm('Konfirmasi','apakah anda yakin ingin menghapus data ' + data.nama + ' ?',
        function (btn,text) {
            if (btn == 'yes') {
                Ext.Ajax.request({
                    url: 'http://127.0.0.1:8000/api/link/' + data.id,
                    method: "DELETE",
                    params: data,
                    success: function(response){
                        Ext.Msg.alert('Sukses Hapus Data');
                        store.load();
                        storeMain.load();
                    },
                    failure: function(response) {
                        Ext.Msg.alert('Error Simpan Data');
                    }
    });
            }
        }, this)},
       

});