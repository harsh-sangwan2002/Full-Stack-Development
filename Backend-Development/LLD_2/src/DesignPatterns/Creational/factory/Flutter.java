package DesignPatterns.Creational.factory;

public class Flutter {

    void refreshUI(){
        System.out.println("Refreshing Flutter UI");
    }

    void setTheme(String theme) {
        System.out.println("Setting Flutter theme to");
    }

    UIFactory getUIFactory(SupportedPlatforms platform) {
        return UIFactoryFactory.getUIFactory(platform);
    }
}
