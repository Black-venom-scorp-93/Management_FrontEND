const About = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">About Us</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700">
            Welcome to Dominos Pizza, your ultimate destination for delicious and convenient food delivery.
            At Foody Monk, we believe that everyone deserves a delightful dining experience without the hassle of cooking or going out.
          </p>
          <section className="mb-8">
            <h2 className="text-2xl text-red-600 text-center font-medium mb-2 mt-6">What We Offer</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6">
                <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR_v7dru-HSRqWNlKtp3ah2NMnppKudcnZvUK47Om7oJDOyZNmH" alt="Delicious Cuisine" className="rounded-full w-48 h-48 object-cover mb-6" />
                <h3 className="text-xl text-gray-900 mb-2 text-center">Delicious Lava Cakes</h3>
                <p className="text-gray-700 text-center">
                  Explore our diverse menu offering a wide range of delicious Lava Cakes from around the world. From comfort food to exotic chocolate flavors, we have something for everyone.
                </p>
              </div>
              <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6">
                <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRotNfPv25KnFEuiNDZiLTB9azv-eTsbQ_BgbPSygFHg43M2kRv" alt="Customizable Options" className="rounded-full w-48 h-48 object-cover mb-6" />
                <h3 className="text-xl text-gray-900 mb-2 text-center">Garlic Breads</h3>
                <p className="text-gray-700 text-center">
                 Freshly Baked Stuffed Garlic Bread with Cheese, Onion and Paneer Tikka fillings. Comes with a dash of Basil Parsley</p>
              </div>
              <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6">
                <img src="https://i.pinimg.com/564x/00/ac/49/00ac494a3b3f9cb71762997fda69143e.jpg" alt="Convenient Delivery" className="rounded-full w-48 h-48 object-cover mb-6" />
                <h3 className="text-xl text-gray-900 mb-2 text-center">Convenient Delivery</h3>
                <p className="text-gray-700 text-center">
                  Enjoy the ease of food delivery right to your doorstep. Our efficient delivery system ensures that your food arrives fresh and on time, ready to be enjoyed.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8 space-y-10">
            <h2 className="text-2xl text-red-600 text-center font-medium mb-2 mt-6">Who We Are</h2>
            <p className="text-lg text-gray-700 mt-4 mb-4">
              Our dedicated team of chefs and delivery experts work tirelessly to bring you a wide range of culinary delights right to your doorstep.
              We carefully curate our menu to offer a diverse selection of cuisines, from traditional favorites to international specialties.
              Whether you're craving a comforting bowl of pasta, a sizzling plate of sushi, or a refreshing salad, we've got you covered.
            </p>
            <div className="flex flex-col md:flex-row items-center md:items-start bg-white shadow-md rounded-lg">
              <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*iURF8Q8VsO5dgxkxn0RL5Q.png" alt="Team" className="rounded-full w-40 h-40 object-cover m-2 md:mr-8" />
              <div>
                <h3 className="text-xl text-gray-900 mb-2 max-md:text-center">A Passionate Team</h3>
                <p className="text-gray-700">
                  At Dominos Pizza, we have assembled a passionate food enthusiasts who are dedicated to delivering exceptional culinary experiences.
                  Our team consists of talented chefs, expert food handlers, and customer-oriented professionals who work together to ensure your satisfaction.
                  We believe that good food has the power to bring people together and make every meal a memorable one.
                </p>
              </div>
            </div>
            <p className="text-lg text-gray-700 mt-3">
              With Dominos Pizza, ordering your favorite pizzas is as easy as a few clicks.
              Simply browse our menu, select your desired dishes, customize them to your preferences, and place your order.
              Our efficient delivery system ensures that your food arrives fresh and piping hot, ready to satisfy your cravings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-red-600 text-center font-medium mb-2 mt-6">The Talented People Behind the Scenes of the Organization</h2>
            <div className="justify-center items-center grid md:grid-cols-2 sm:grid-cols-1 gap-6">
              <a href="https://github.com/Black-venom-scorp-93" target="_blank" className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:shadow-lg">
                <img src="https://avatars.githubusercontent.com/u/135808699?v=4" alt="Team Member" className="w-36 h-36 rounded-full object-cover mb-4" />
                <h3 className="text-xl font-medium text-gray-900 text-center">Sakthi Dhasan</h3>
                <p className="text-lg text-gray-900 text-center">Frontend / Backend</p>
              </a>
              {/* <a href="https://github.com/jalandhar04" target="_blank" className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:shadow-lg">
                <img src="https://avatars.githubusercontent.com/u/98611278?v=4" alt="Team Member" className="w-36 h-36 rounded-full object-cover mb-4" />
                <h3 className="text-xl font-medium text-gray-900 text-center">Jalandhar</h3>
                <p className="text-lg text-gray-900 text-center">Tailwind</p>
              </a> */}
            </div>
            <p className="text-lg text-gray-700 mt-4">
              We value our customers' trust and prioritize their satisfaction above all.
              Our commitment to quality, timely service, and excellent customer support sets us apart from the rest.
              Join the Foody Monk family today and experience the convenience of premium food delivery like never before.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;