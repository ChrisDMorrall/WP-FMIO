<?php

function add_theme_scripts() {

  wp_enqueue_style( 'bootstrap-style', get_template_directory_uri() . '/css/bootstrap.css', array(), '1.0', 'all');

  wp_enqueue_script( 'jquery', get_template_directory_uri() . '/js/jquery.min.js', NULL, '1.0', true);

  wp_enqueue_script( 'popper', get_template_directory_uri() . '/js/popper.min.js', NULL, '1.0', true);

  wp_enqueue_script( 'bootstrap', get_template_directory_uri() . '/js/bootstrap.min.js', array ( 'jquery', 'popper' ), '1.0', true);

  wp_enqueue_script( 'form', get_template_directory_uri() . '/js/form.js', array('jquery'), '1.0', true);

  wp_enqueue_style( 'fa', get_template_directory_uri() . '/css/font-awesome.min.css', array(), '4.7', 'all');

  wp_enqueue_style('style',  get_stylesheet_uri());

}
add_action( 'wp_enqueue_scripts', 'add_theme_scripts' );

add_theme_support( 'admin-bar', array( 'callback' => '__return_false' ) );

?>
