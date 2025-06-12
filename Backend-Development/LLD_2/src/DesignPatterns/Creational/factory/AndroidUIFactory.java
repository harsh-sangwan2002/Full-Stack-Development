package DesignPatterns.Creational.factory;

import DesignPatterns.Creational.factory.buttons.AndroidButton;
import DesignPatterns.Creational.factory.buttons.Button;
import DesignPatterns.Creational.factory.menu.AndroidMenu;
import DesignPatterns.Creational.factory.menu.Menu;

public class AndroidUIFactory implements UIFactory{

    @Override
    public Button createButton() {
        return new AndroidButton();
    }

    @Override
    public Menu createMenu() {
        return new AndroidMenu();
    }
}
