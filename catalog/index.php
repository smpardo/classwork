<!DOCTYPE html>

<html lang="en">

	<head>
		<meta charset="utf-8" />
	
		<title>Homer’s Online Music Shop</title>
	
		<link rel="shortcut icon" href="../images/homer.ico" />
		<link rel="stylesheet" href="../css/main.css" />
		<link rel="stylesheet" href="../css/nav.css" />

	</head>

<body>

	<header>

		<img src="../images/Homer_Rock_and_Roll.jpg" alt="Homer" width="100"
			height="100" />

		<hgroup>

			<h1>Homer's Music Store</h1>

			<h2>Rock On!</h2>

		</hgroup>



		<nav>

			<ul id="main">

				<li><a href="../index.html">Home</a></li>

				<li><a href="../multi_column.html">Layout</a>

					<ul>

						<li><a href="../two_column_left.html">2 Column Float Left</a></li>

						<li><a href="../two_column_right.html">2 Column Float Right</a></li>

						<li><a href="../three_column.html">3 Column Float</a></li>

					</ul></li>

				<li><a href="../table.html">Tables</a>

					<ul>

						<li><a href="../dynamic_table.html">Dynamic</a></li>

						<li><a href="../web_sql.html">Database</a></li>

					</ul></li>

				<li><a href="../slideshow.html">Slide Show</a>

					<ul>

						<li><a href="../accordion.html">Accordion</a></li>

					</ul></li>

				<li><a href="../video.html">Multimedia</a>

					<ul>

						<li><a href="../audio.html">Audio</a></li>

					</ul></li>

				<li><a href="../email_form.html">Forms</a>

					<ul>

						<li><a href="../product_discount.html">Product Discount</a></li>

						<li><a href="../invoice_total.html">Invoice total</a></li>

					</ul></li>

				<li><a href="../product.php">Products</a></li>

				<li><a href="../images.html">Graphics</a>

					<ul>

						<li><a href="../rollover.html">Rollover</a></li>

						<li><a href="../svg.html">SVG</a></li>

						<li><a href="../canvas.html">Canvas</a></li>

						<li><a href="../geolocation.html">Geolocation</a></li>
						<li><a href="../cube.html">Animation</a></li>

					</ul></li>

			</ul>

		</nav>



	</header>



	<section id="container">

		<header id="top">

			<h1>Everything Is On Sale for Halloween</h1>

		</header>

		<!-- Content Starts Here -->

		<?php
			require_once('../util/main.php');
			require_once('../util/tags.php');
			require_once('../model/database.php');
			require_once('../model/product_db.php');
			require_once('../model/category_db.php');
			
			if (isset($_POST['action'])) {
			    $action = $_POST['action'];
			} else if (isset($_GET['action'])) {
			    $action = $_GET['action'];
			} else {
			    $action = 'list_products';
			}
			
			switch ($action) {
			    case 'list_products':
			        // get current category
			        $category_id = $_GET['category_id'];
			        if (empty($category_id)) {
			            $category_id = 1;
			        }
			
			        // get categories and products
			        $current_category = get_category($category_id);
			        $categories = get_categories();
			        $products = get_products_by_category($category_id);
			
			        // Display view
			        include('product_list.php');
			        break;
			    case 'view_product':
			        $categories = get_categories();
			
			        // Get product data
			        $product_id = $_GET['product_id'];
			        $product = get_product($product_id);
			
			        // Display product
			        include('product_view.php');
			        break;
			}
		?>

		<!-- Content Ends Here-->

	</section>



	<footer>

		<p>&copy; 2012 Homer J. Simpson</p>

	</footer>



</body>

</html>

