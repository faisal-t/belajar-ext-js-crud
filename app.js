/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'clasic.Application',

    name: 'clasic',

    requires: [
        // This will automatically load all classes in the clasic namespace
        // so that application classes do not need to require each other.
        'clasic.*'
    ],

    // The name of the initial view to create.
    mainView: 'clasic.view.main.Main'
});
