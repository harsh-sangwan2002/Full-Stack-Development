package DesignPatterns.Creational.factory;

import DesignPatterns.Creational.factory.buttons.Button;
import DesignPatterns.Creational.factory.buttons.iOSButton;
import DesignPatterns.Creational.factory.menu.Menu;
import DesignPatterns.Creational.factory.menu.iOSMenu;

public class iOSUIFactory implements UIFactory{

    @Override
    public Button createButton() {
        return new iOSButton();
    }

    @Override
    public Menu createMenu() {
        return new iOSMenu();
    }
}
