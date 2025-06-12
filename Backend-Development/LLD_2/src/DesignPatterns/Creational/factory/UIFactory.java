package DesignPatterns.Creational.factory;

import DesignPatterns.Creational.factory.buttons.Button;
import DesignPatterns.Creational.factory.menu.Menu;

// In this factory interface, we are only going to have factory methods
public interface UIFactory {

    Button createButton();
    Menu createMenu();
}
