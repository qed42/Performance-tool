<?php

/**
 * @file
 * Integrates the UNW theme with the color module.
 */

$info = [
  // Available colors and color labels used in theme.
  'fields' => [
    'main_nav' => t('Main menu background'),
    'main_nav_dropdown' => t('Main menu dropdown visuals'),
    'slider' => t('Slider Background'),
    'slider_active' => t('Slider active pagination'),
    'slider_pagination' => t('Slider pagination'),
    'icons' => t('Icons'),
    'link' => t('Link'),
    'footer_bk' => t('Top header and social footer background'),
  ],
  // Pre-defined color schemes.
  'schemes' => [
    'default' => [
      'title' => 'Default',
      'colors' => [
        'main_nav' => '#f15d22',
        'main_nav_dropdown' => '#ec9978',
        'slider' => '#ffffff',
        'slider_active' => '#222222',
        'slider_pagination' => '#797979',
        'icons' => '#ee561c',
        'link' => '#0397d6',
        'footer_bk' => '#e5e3dc',
      ],
    ],
    'hq' => [
      'title' => 'HQ',
      'colors' => [
    // $orange2
        'main_nav' => '#f15d22',
    // $orange2
        'main_nav_dropdown' => '#f15d22',
    // No variable.
        'slider' => '#ffffff',
    // No variable.
        'slider_active' => '#222222',
    // No variable.
        'slider_pagination' => '#797979',
    // $orange2.
        'icons' => '#f15c22',
    // $blue3
        'link' => '#0397d6',
        'footer_bk' => '#f2ede9',
      ],
    ],
    'reg_blue' => [
      'title' => 'Regional Dark Blue',
      'colors' => [
    // $dark-blue
        'main_nav' => '#003e7e',
    // $light-blue
        'main_nav_dropdown' => '#1a97d6',
    // No variable.
        'slider' => '#bdcddd',
    // $dark-blue.
        'slider_active' => '#003e7e',
    // $white
        'slider_pagination' => '#ffffff',
    // $grey-dark
        'icons' => '#595a5c',
    // $blue3
        'link' => '#003e7e',
    // No variable.
        'footer_bk' => '#ccdef0',
      ],
    ],
    'reg_orange' => [
      'title' => 'Regional Orange',
      'colors' => [
        'main_nav' => '#f68c1f',
        'main_nav_dropdown' => '#f15d22',
        'slider' => '#ffba66',
        'slider_active' => '#f68c1f',
        'slider_pagination' => '#ffffff',
        'icons' => '#595a5c',
        'link' => '#f68c1f',
        'footer_bk' => '#ffe8cc',
      ],
    ],
    'reg_brown' => [
      'title' => 'Regional Brown',
      'colors' => [
        'main_nav' => '#99886b',
        'main_nav_dropdown' => '#b44b37',
        'slider' => '#e7d2ad',
        'slider_active' => '#99886b',
        'slider_pagination' => '#ffffff',
        'icons' => '#595a5c',
        'link' => '#99886b',
        'footer_bk' => '#ebdcc2',
      ],
    ],
    'reg_forrest_green' => [
      'title' => 'Forrest Green',
      'colors' => [
          'main_nav' => '#0e9948',
          'main_nav_dropdown' => '#0e9948',
          'slider' => '#e5ffdf',
          'slider_active' => '#0e9948',
          'slider_pagination' => '#ffffff',
          'icons' => '#595A5C',
          'link' => '#0e9948',
          'footer_bk' => '#e5ffdf',
      ],
    ],
  ],
];

// CSS files (excluding @import) to rewrite with new color scheme.
$info['css'] = ['css/color.css'];
// Files to copy.
$info['copy'] = ['logo.svg'];
