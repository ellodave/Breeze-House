function redirect_expHomepage() {
    if( ! is_home() && ! is_front_page() )
        return;

    wp_redirect( 'https://experience.breezehouse.co.uk/', 307 );
    exit;
}

add_action( 'template_redirect', 'redirect_expHomepage' );
