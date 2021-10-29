<template>
  <main>
    <div>
      <div class="testimonial" id="customer-1">
        <div class="testimonial__image-container">
          <img
            src="~~/assets/images/customer-1.jpg"
            alt="Mike Statham - Customer"
            class="testimonial__image"
          />
        </div>
        <div class="testimonial__info">
          <h1 class="testimonial__name">Mike Statham</h1>
          <h2 class="testimonial__subtitle">
            Founder of
            <a href="tech-analysis.com">tech-analysis.com</a>
          </h2>
          <p class="testimonial__text">
            uHost helped me realize my project with a highly constrained budget
            in like no time.
          </p>
        </div>
      </div>
      <div class="testimonial" id="customer-2">
        <div class="testimonial__info">
          <h1 class="testimonial__name">John Mellow</h1>
          <h2 class="testimonial__subtitle">
            Hosts his private videos on uHost.
          </h2>
          <p class="testimonial__text">
            I worked as a blogger and always looked for an integrated hosting
            and file storage solution. I found it in uHost!
          </p>
        </div>
        <div class="testimonial__image-container">
          <img
            src="~~/assets/images/customer-2.jpg"
            alt="John Mellow - Customer"
            class="testimonial__image"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<style>
.testimonial {
  font-size: 1.25rem;
  margin: 1.5rem 0;
}

.testimonial__list {
  width: 80vw;
  margin: auto;
}

.testimonial__image-container {
  width: 65vw;
  display: inline-block;
  vertical-align: middle;
  box-shadow: 3px 3px 5px 3px rgba(0, 0, 0, 0.3);
}

.testimonial__image {
  width: 100%;
  vertical-align: middle;
}

.testimonial__info {
  text-align: right;
  padding: 1rem;
  display: inline-block;
  vertical-align: middle;
  width: 30vw;
}

#customer-2.testimonial {
  text-align: right;
}

#customer-2 .testimonial__info {
  text-align: left;
}

.testimonial__name {
  font-size: 2rem;
  margin: 3px;
  color: #ff5454;
}

.testimonial__subtitle {
  margin: 0;
  font-size: 1.5rem;
  color: #ccc;
}

.testimonial__subtitle a {
  color: inherit;
  text-decoration: none;
}

.testimonial__subtitle a:hover,
.testimonial__subtitle a:active {
  color: #7a7a7a;
}

.testimonial__text {
  margin: 0.25rem;
}
</style>
