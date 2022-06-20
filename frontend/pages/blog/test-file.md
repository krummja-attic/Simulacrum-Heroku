---
title: Orbital Math
date: 2020-05-13T12:00:00+00:00
---

<script setup>
import { formatDate } from '@/utilities'
</script>

# {{ frontmatter.title }}

## {{ formatDate(frontmatter.date) }}

---

Much of what follows stems from the Orbital Dynamics simulator created by mathematician and computer scientist Paul Lutus.$^{1}$ Additions and other notes are from various sources.

## Orbital Math: A Primer

### Kepler's Laws

Johannes Kepler made what is perhaps one of the most important contributions to the development of astronomy. Between 1609 and 1619, Kepler developed **three laws of planetary motion** that built upon the heliocentric model of Nicolaus Copernicus. The contemporary understanding took orbits to be circular, with parent masses described as the *center* of a given body's orbit. 

One of the more puzzling issues of the Copernican theory was the observation that the apparent velocity of the planets did not remain constant, but varied over time. Being that the orbits of most of the inner planets have an **eccentricity**$^{2}$ at or very close to 0, Kepler's model essentially predicts the Copernical model; however, with a non-zero eccentricity, the Copernical model is unable to accurately predict motion.

Kepler's Laws state:

1. The orbit of a planet is an ellipse with the Sun as one of the two foci.
2. A line segment joining a planet and the Sun sweeps out equal areas during equal intervals of time.
3. The square of the orbital period of a planet is directly proportional to the cube of the semi-major axis of its orbit.

This is graphically represented in the figure below.

---

![](/assets/img/1280px-Kepler_laws_diagram.svg.png)

*Figure 1:* Kepler's Laws with two orbiting bodies about a parent mass (the sun).

---

The observation of variable velocity is explained in terms of the second law. Although neither linear nor angular speed of the orbiting body is constant, the **areal velocity** of the body is constant.

### Excursus on Areal Velocity

![](/assets/img/ArealVelocity_with_curved_area.svg.png)

Let point A represent the inflection point around which some orbiting body rotates, with points B and C representing positions of that orbiting body at two different points in time. The vector $\vec{r}(t)$ describes the position vector of the orbiting body at time $t$, while $\vec{r}(t+\Delta t)$ describes the position vector at time $t$ plus the time interval $\Delta t$.

Take point D to be the point described by adding the vectors $\vec{r}(t)$ and $\vec{r}(t+\Delta t)$. The area of the triangle $ABC$ is exactly half the area of the resulting parallelogram $ABCD$. The magnitude of the cross product of $\vec{r}(t)$ and $\vec{r}(t+\Delta t)$ is equal to the area of $ABCD$. In other words, $ABCD = \vec{r}(t) \times \vec{r}(t+\Delta t)$.

The vector area of triangle $ABC$ is therefore given by:

$$
ABC = \frac{\vec{r}(t) \times \vec{r}(t+\Delta t)}{2}
$$

Finally, the areal velocity is computed from the vector triangle divided by $\Delta t$ as $\Delta t$ approaches the limit. Accordingly:

$$
areal~velocity = \lim_{\Delta t \rightarrow 0} \frac{\vec{r}(t) \times \vec{r}'(t)\Delta t}{2 \Delta t}
$$

$$
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ = \lim_{\Delta t \rightarrow 0} \frac{\vec{r}(t) \times (\vec{r}'(t) + \vec{r}'\Delta t)}{2 \Delta t}
$$

$$
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ = \lim_{\Delta t \rightarrow 0} \frac{\vec{r}(t) \times \vec{r}'(t)}{2 \Delta t} \left(\frac{\Delta t}{\Delta t}\right)
$$

$$
~~~~~~~~~~~~ = \frac{\vec{r}(t) \times \vec{r}'(t)}{2}
$$

The vector $\vec{r}'(t)$ is the velocity vector $\vec{v}(t)$ of the moving body. Therefore:

$$
\frac{d\vec{A}}{dt} = \frac{\vec{r} \times \vec{v}}{2}
$$

Which states that the derivative of $\vec{A}$ with respect to time is equivalent to half the cross product of the moving body's position vector $\vec{r}$ and velocity vector $\vec{v}$.

---

## Simulating Orbits

Simulating orbital motion is not as difficult as it may seem. The primary challenge of developing such a simulation is the same challenge faced by physicists and cosmologists working with orbital calculations. For any system of three or more bodies, there is no closed-form solution that describes the positions and velocities of those bodies (the *n*-body problem). Instead, we must constantly (re)calculate the relevant values at each point in time that the simulation runs.

To get us off the ground (heh), we have to set some initial conditions and then model the changes to the system at each susbequent time step. *At* each given time step, we can use the **state vectors** of the system to describe the state of the system at that point. For this, we will neeed:

- A radius between the gravitating bodies.

  $$
  r = \sqrt{x^{2} + y^{2} + z^{2}}
  $$

- A gravitational force scalar.

  $$
  f = -\frac{GM_{1}M_{2}}{r^{2}}
  $$

- A normalized direction vector (unit vector) to give the gravitational force scalar direction.

$$
\hat{r}\{x, y, z\} = \frac{\{x, y, z\}}{\sqrt{x^{2} + y^{2} + z{^2}}}
$$

- The velocity vector is constantly updated by gravitational acceleration and multiplied by the unit vector.

$$
\vec{v}_{t+1} = \vec{v}_{t} + \hat{r}f\Delta t
$$

- The position vector is updated by velocity.

$$
\vec{p}_{t+1} = \vec{p}_{t} + \vec{v}_{t+1}\Delta t
$$

- The updated position is plotted on an output, and then the process repeats.

---

[1] [Orbital Dynamics: A comprehensive JavaScript/Canvas orbital physics model](https://arachnoid.com/orbital_dynamics/index.html)

[2] **Eccentricity** is the measure of the degree to which a conic section deviates from a perfect circle. Eccentricity as relevant to orbital dynamics is represented as a value between 0 and 1, where 0 describes a circle, 1 describes a parabola. Any value between 0 and 1 (exclusive) describes an ellipse.

