package DesignPatterns.Creational.factory;

import DesignPatterns.Creational.factory.buttons.Button;
import DesignPatterns.Creational.factory.menu.Menu;

public class Client {

    public static void main(String[] args) {

        Flutter flutter = new Flutter();
        UIFactory uiFactory = flutter.getUIFactory(SupportedPlatforms.iOS);

        Button button = uiFactory.createButton();
        button.click();

        Menu menu = uiFactory.createMenu();
        menu.showMenu();
    }
}
