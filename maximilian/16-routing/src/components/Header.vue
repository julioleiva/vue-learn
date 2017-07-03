<template>
    <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
            <ul class="nav navbar-nav">
                <router-link to="/" tag="li" activeClass="active" exact><a>Home</a></router-link>
                <router-link to="/user/1" tag="li" activeClass="active"><a>Usuario</a></router-link>
           </ul>
        </div>
    </nav>
</template>