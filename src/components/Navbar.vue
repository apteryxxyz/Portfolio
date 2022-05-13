<template>
    <nav>
        <NuxtLink to="/"><b>Apteryx</b></NuxtLink>
        <NuxtLink to="/projects">Projects</NuxtLink>
    </nav>
</template>

<style scoped>
nav {
    display: flex;
    flex-direction: row;
    top: 0;
    z-index: 100;
    position: fixed;
    width: 100%;
    height: 75px;
    align-items: center;
}

@media (max-width: 992px) {
    nav {
        background-color: black;
    }
}

nav a {
    float: right;
    padding: 30px;
    color: white;
    font-size: 1.1rem;
    cursor: pointer;
}

nav a:first-of-type {
    float: left;
    padding: 30px;
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
    margin-right: auto;
    cursor: pointer;
}
</style>
