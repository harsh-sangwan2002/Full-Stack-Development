package DesignPatterns.Creational.factory;

public class UIFactoryFactory {

    public static UIFactory getUIFactory(SupportedPlatforms platform) {
        return switch (platform) {
            case iOS -> new iOSUIFactory();
            case ANDROID -> new AndroidUIFactory();
            case WINDOWS -> new WindowsUIFactory();
            default -> throw new IllegalArgumentException("Unsupported platform: " + platform);
        };
    }
}
