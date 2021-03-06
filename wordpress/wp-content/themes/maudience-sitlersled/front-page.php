<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */

get_header(); ?>

	<div id="primary" class="site-content">
		<div id="content" role="main">
			<?php while ( have_posts() ) : the_post(); ?>
				<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

					<section id="top-section" class="top-section home-section">
						
						<div id="top-centerfull-wrap" class="top-centerfull-wrap inner-main-wrap">
								<div id="top-centerfull" class="column-centerfull section-column inner-wrap">
								<?php if ( is_active_sidebar( 'home-top-centerfull' ) ) : ?>
									<div id="home-top-centerfull" class="home-top-centerfull widget-area" role="complementary">
										<?php dynamic_sidebar( 'home-top-centerfull' ); ?>
									</div><!-- #home-top-right -->
								<?php endif; ?>
							</div>
						</div>

						<div class="post-top-section">
							<div id="top-columns-wrap" class="top-columns-wrap inner-main-wrap inner-wrap">
								<div id="top-left-half" class="column-left section-column inner-wrap">
									<header class="entry-header">
										<h1 class="entry-title"><?php the_title(); ?></h1>
									</header>
									<div class="entry-content"><?php the_content(); ?></div><!-- .entry-content -->
									<div class="slider-wrap">
										<?php if ( is_active_sidebar( 'home-top-left' ) ) : ?>
											<div id="home-top-left" class="home-top-left widget-area" role="complementary">
												<?php dynamic_sidebar( 'home-top-left' ); ?>
											</div><!-- #home-top-right -->
										<?php endif; ?>
									</div>
								</div>

								<div id="top-right-half" class="column-right section-column inner-wrap">
									<?php if ( is_active_sidebar( 'home-top-right' ) ) : ?>
										<div id="home-top-right" class="home-top-right widget-area" role="complementary">
											<?php dynamic_sidebar( 'home-top-right' ); ?>
										</div><!-- #home-top-right -->
									<?php endif; ?>
								</div>
							</div>
						</div>
					</section>

					<section id="middle-section" class="middle-section home-section">
						<div class="services-information-output inner-wrap">
							<?php if ( is_active_sidebar( 'home-middle' ) ) : ?>
								<div id="home-middle" class="home-middle widget-area" role="complementary">
									<?php dynamic_sidebar( 'home-middle' ); ?>
								</div><!-- #footer-widget-left -->
							<?php endif; ?>
						</div>
					</section>

					<section id="bottom-section" class="bottom-section home-section">
						<div id="inner-main-wrap" class="inner-main-wrap inner-wrap">
							<div id="contact-section" class="column-left section-column">
								<div class="testimonials-information-output">
									<?php if ( is_active_sidebar( 'home-bottom-left' ) ) : ?>
										<div id="home-bottom-left" class="home-bottom-left widget-area" role="complementary">
											<?php dynamic_sidebar( 'home-bottom-left' ); ?>
										</div><!-- #footer-widget-left -->
									<?php endif; ?>
								</div>
							</div>

							<div id="testimonials-section" class="column-right section-column">
								<div id="home-bottom-right" class="home-bottom-right widget-area" role="complementary">
									<?php if ( is_active_sidebar( 'home-bottom-right' ) ) : ?>
											<?php dynamic_sidebar( 'home-bottom-right' ); ?>
									<?php else: ?>
										<h2>Testimonials</h2>
										<?php maudience_return_custom_posts('testimonials', 1, $title_or_content = 'both') ?>
									<?php endif; ?>
								</div><!-- #footer-widget-left -->
							</div>
						</div>
					</section>

				</article><!-- #post -->
			<?php endwhile; // end of the loop. ?>
		</div><!-- #content -->
	</div><!-- #primary -->

<?php get_footer(); ?>