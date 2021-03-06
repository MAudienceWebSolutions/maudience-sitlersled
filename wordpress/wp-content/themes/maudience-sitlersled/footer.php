<?php
/**
 * The template for displaying the footer
 *
 * Contains footer content and the closing of the #main and #page div elements.
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */
?>
		<?php if( !is_front_page() ) : ?></div><!-- #inner-main-wrap .inner-wrap --><?php endif; ?>
	</div><!-- #main .wrapper -->
	<footer id="colophon" role="contentinfo">
		<div id="inner-footer-wrap" class="inner-footer-wrap inner-wrap">
			<?php if ( is_active_sidebar( 'footer-widget-left' ) ) : ?>
				<div id="footer-widget-left" class="footer-widget-left widget-area" role="complementary">
					<?php dynamic_sidebar( 'footer-widget-left' ); ?>
				</div><!-- #footer-widget-left -->
			<?php endif; ?>

			<?php if ( is_active_sidebar( 'footer-widget-center' ) ) : ?>
				<div id="footer-widget-center" class="footer-widget-center widget-area" role="complementary">
					<?php dynamic_sidebar( 'footer-widget-center' ); ?>
				</div><!-- #footer-widget-center -->
			<?php endif; ?>

			<?php if ( is_active_sidebar( 'footer-widget-right' ) ) : ?>
				<div id="footer-widget-right" class="footer-widget-right widget-area" role="complementary">
					<?php dynamic_sidebar( 'footer-widget-right' ); ?>
				</div><!-- #footer-widget-right -->
			<?php endif; ?>
		</div><!-- #inner-footer-wrap -->
		<div id="bottom-footer-wrap" class="bottom-footer-wrap">
			<div class="inner-wrap">
				<div id="footer-bottom-left" class="column column-right">Copyright Sitlers LED</div>
				<div id="footer-bottom-right" class="column column-right"><img src="/wp-content/themes/maudience-sitlersled/logo-white.png" /></div>
			</div>
		</div>
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>
</body>
</html>