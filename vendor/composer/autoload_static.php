<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit1789e80acf5bb9df47e60a84cfffd46a
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit1789e80acf5bb9df47e60a84cfffd46a::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit1789e80acf5bb9df47e60a84cfffd46a::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit1789e80acf5bb9df47e60a84cfffd46a::$classMap;

        }, null, ClassLoader::class);
    }
}
