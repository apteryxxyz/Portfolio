<script setup>
import timeline from '@/assets/data/timeline.json';
import skills from '@/assets/data/skills.json';
</script>

<template>
    <view>
        <Navbar />

        <div id="container" class="gradient">
            <section id="bio">
                <h1>Kia ora!</h1>

                <p>
                    Hey there, I'm Apteryx, a 17 year old software developer in the makings from
                    Aotearoa New Zealand.
                    <br />
                    <br />
                    I love to create things, anything from simple Discord bots to complex full stack
                    cross platform applications. View the
                    <NuxtLink to="/projects">projects</NuxtLink> page for a list of what I've been
                    up to.
                </p>

                <div id="socials">
                    <a href="https://discord.gg/vZQbMhwsKY" target="_blank">
                        <nuxt-icon name="discord" />
                    </a>
                    <a href="https://github.com/apteryxxyz" target="_blank">
                        <nuxt-icon name="github" />
                    </a>
                    <a href="https://twitter.com/apteryxxyz" target="_blank">
                        <nuxt-icon name="twitter" />
                    </a>
                    <a href="https://youtube.com/apteryx" target="_blank">
                        <nuxt-icon name="youtube" />
                    </a>
                </div>
            </section>

            <section id="journey">
                <h1>My Journey</h1>

                <div id="timeline">
                    <template v-for="(time, index) in timeline" :key="index">
                        <div>{{ time.frame }}</div>
                        <div>{{ time.text.join('\n') }}</div>
                    </template>
                </div>
            </section>

            <section id="skills">
                <h1>My Skillset</h1>

                <div id="languages">
                    <div v-for="(skill, index) in skills" :key="index">
                        <nuxt-icon :name="skill.icon" />
                        <span>{{ skill.name }}</span>
                    </div>
                </div>
            </section>
        </div>

        <Footer />
    </view>
</template>

<script>
export default {
    head: { title: 'Home' },
};
</script>

<style scoped>
#container {
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    justify-content: center;
    margin: auto 0;
    background-color: #181818;
    color: #fff;
}

#container section {
    display: flex;
    flex-direction: column;
    max-width: 700px;
    margin: 250px 10%;
}

#container section h1 {
    width: 100%;
    font-size: 2.5rem;
    font-weight: bold;
}

#container section p {
    font-size: 1.3rem;
}

#container section a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
}

#container section a:hover {
    color: #dfdfdf;
}

#socials {
    display: flex;
    flex-wrap: wrap;
}

#socials a {
    padding: 20px 10px 0 0;
    font-size: 32px;
    transition: all 0.2s ease-in-out;
}

#socials a:hover {
    color: #dfdfdf;
    transform: scale(1.1);
}

#timeline {
    display: grid;
    grid-template-columns: 10% 40% 10% 40%;
    white-space: pre-line;
}

#timeline div {
    display: flex;
    align-items: center;
    padding: 10px;
}

#timeline div:nth-child(odd) {
    text-align: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.5rem;
}

#timeline div:nth-child(even) {
    justify-content: flex-start;
}

#skills div {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    padding: 10px;
    font-size: 20px;
}

#skills div * {
    padding-right: 10px;
}

@media (max-width: 992px) {
    #timeline {
        grid-template-columns: 20% 80%;
    }
}

@media (max-width: 600px) {
    #container section {
        margin: 50px 10%;
    }

    #timeline {
        grid-template-columns: 1fr;
    }
}
</style>
