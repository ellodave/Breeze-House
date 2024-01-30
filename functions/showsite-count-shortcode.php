function number_of_showsites_shortcode() {
    // Define the post type
    $post_type = 'rank_math_locations';

    // Query to count the published posts of the specified post type
    $args = array(
        'post_type'      => $post_type,
        'post_status'    => 'publish',
        'posts_per_page' => -1,
    );

    $query = new WP_Query($args);

    // Get the post count
    $post_count = $query->post_count;

    // Output the post count
    return $post_count;
}

// Register the shortcode with the new name
add_shortcode('number_of_showsites', 'number_of_showsites_shortcode');
