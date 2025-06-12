package DesignPatterns.Creational.factory;

import DesignPatterns.Creational.factory.buttons.WindowsButton;
import DesignPatterns.Creational.factory.buttons.Button;
import DesignPatterns.Creational.factory.menu.Menu;
import DesignPatterns.Creational.factory.menu.WindowsMenu;

public class WindowsUIFactory implements UIFactory{

    @Override
    public Button createButton() {
        return new WindowsButton();
    }

    @Override
    public Menu createMenu() {
        return new WindowsMenu();
    }
}
