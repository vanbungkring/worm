<?php
/**
 * Single Product tabs
 *
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     2.0.0
 */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

/**
 * Filter tabs and allow third parties to add their own
 *
 * Each tab is an array containing title, callback and priority.
 * @see woocommerce_default_product_tabs()
 */
$tabs = apply_filters( 'woocommerce_product_tabs', array() );

if ( ! empty( $tabs ) ) : ?>

	<div class="woocommerce-tabs">
		<?php $return = '[vc_tabs]'; ?>
			<?php foreach ( $tabs as $key => $tab ) :
				$return .= '[vc_tab title="' . apply_filters( 'woocommerce_product_' . $key . '_tab_title', $tab['title'], $key ) . '"]';
				ob_start();
				call_user_func( $tab['callback'], $key, $tab );
				$temp = ob_get_clean();
				$return .= $temp . '[/vc_tab]';
			endforeach; ?>
		<?php 
			$return .= '[/vc_tabs]'; 
			echo do_shortcode($return);
		?>
	</div>

<?php endif; ?>