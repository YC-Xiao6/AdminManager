Ext.define('AdminManager.view.main.region.top', {
    extend: 'Ext.toolbar.Toolbar',
    xtype:'main-top',
    style:'background-color:#35baf6;color:write;font-size:18px',

    items:[
        {
            xtype:'label',
            bind:{
                text:'信息管理系统'
            },
            style:'font-size:30px;font-weight:bold;padding-left:30px'
        },'->',
        {
            xtype:'label',
            bind:{
                // text:'当前用户：'+ window.localStorage.getItem('LoggedIn'),
                text:'当前用户：'+ window.sessionStorage.getItem('LoggedIn'),
            },
        },
        {  
            // text:'注销',
            xtype:'button',
            iconCls:'icon-off',
            handler: 'onLoginOutClick'
        }
    ]
    
});