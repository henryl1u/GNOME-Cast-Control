/*
Import Main because is the instance of the class that have all the UI elements
and we have to add to the Main instance our UI elements
*/
const Main = imports.ui.main;

/*
Import CastControl libraries
*/
const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();
const mainMenu = Me.imports.CastMainMenu;

/* 
Global variables for use as button to click 
*/
let castControlButton;


function init() {}

function enable() {
	// Init the CastMainMenu which inherits a PanelMenu button
	castControlButton = new mainMenu.CastMainMenu;
	// Add the panel menu button to the GNOME status area
	Main.panel.addToStatusArea('CastMainMenu', castControlButton, 0, 'right');
}

function disable() {
	castControlButton.destroy();	
}