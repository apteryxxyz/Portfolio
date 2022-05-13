<script setup>
import projects from '@/assets/data/projects.json';
</script>

<template>
    <view>
        <Navbar />

        <div id="container" class="gradient">
            <section v-for="(project, index) in projects" :key="index" class="project">
                <h1>{{ project.name }}</h1>
                <p>{{ project.description }}</p>

                <div class="tech-group">
                    <div v-for="(tech, index2) in project.technologies" :key="index2">
                        <nuxt-icon :name="tech[0]" />
                        <span>{{ tech[1] }}</span>
                    </div>
                </div>

                <div class="button-group">
                    <template v-for="(button, index2) in project.buttons" :key="index2">
                        <a :href="button.url" :target="button.target">{{ button.text }}</a>
                    </template>
                </div>
            </section>
        </div>

        <Footer />
    </view>
</template>

<script>
export default {
    head: { title: 'Projects' },
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
    align-items: center;
    justify-content: center;
    text-align: center;
    max-width: 500px;
    margin: 75px 10%;
}

#container section h1 {
    width: 100%;
    font-size: 2.5rem;
    font-weight: bold;
}

#container section p {
    font-size: 1.3rem;
}

.tech-group,
.button-group {
    padding-top: 25px;
    display: flex;
    font-size: 20px;
}

.tech-group div {
    padding: 20px;
}

.button-group a {
    height: 100%;
    margin: 7px;
    padding: 10px;
    text-align: center;
    border-radius: 10px;
    cursor: pointer;
    background-color: rgb(53 53 53);
    color: white;
    transition: all 0.2s ease-in-out;
}

.button-group a:hover {
    background-color: rgb(82 82 82);
}
</style>
