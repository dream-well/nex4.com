<template>
    <div class="container-fluid default" :class="{rtl: $i18n.locale === 'ar' || $i18n.locale === 'he' }">

        <div class="spinner-load" v-if="show_loading" style="z-index:100000000;">
            <div class="hidden-md-up phone">
                <div id="main">

                    <span class="spinner"></span>

                </div>
            </div>

            <div class="hidden-sm-down other">
                <div id="main" style="left:50%;">

                    <span class="spinner"></span>

                </div>
            </div>
        </div>

        <!-- END Spinner -->

        <message v-if="
                         $route.name ==='discover'    ||
                         $route.name ==='series'  ||
                         $route.name ==='collection' ||
                         $route.name ==='kids'    ||
                         $route.name ==='movies'    ||
                         $route.name ==='channels' ? true : false" :message="message_alert" :show_sidebar="show_sidebar"></message>

        <navbar v-if="
                         $route.name ==='login'    ||
                         $route.name ==='forget_password'  ||
                         $route.name ==='signup'  ||
                         $route.name ==='payment'  ||
                         $route.name ==='contact-us'  ||
                         $route.name ==='plan'? false:true" ></navbar>


        <!-- Nabvar XS -->

        <div class="col-12 grid">
            <div class="row">
                <a v-if="
                         $route.name ==='login'    ||
                         $route.name ==='forget_password'  ||
                         $route.name ==='contact-us'  ||
                         $route.name ==='payment'  ||
                         $route.name ==='signup'  ||
                         $route.name ==='plan'? false:true" @click="show_sidebar = !show_sidebar">
                    <div class="hide_show_sidebar" >
                        <img src="/images/menu-options.svg" alt="actor" style="margin-top:30px;margin-left:25px;" width="25">
                    </div>
                </a>


                <sidebar class="col-1 hidden-sm-down sidebar-content"
                v-if="show_sidebar &&
                         ($route.name ==='login'    ||
                         $route.name ==='forget_password'  ||
                         $route.name ==='payment'  ||
                         $route.name ==='signup'  ||
                         $route.name ==='contact-us'  ||
                         $route.name ==='plan'? false:true)"
                ></sidebar>

                <!-- SideBar -->


                <router-view :show_sidebar="show_sidebar" class="col p-0 margin-left-auto" v-if="!show_sidebar"></router-view>
                <router-view :show_sidebar="show_sidebar" class="col p-0 margin-left-13" v-if="show_sidebar"></router-view>
                <!-- Router view -->

                <search-page v-if="showSearchPage" :show_sidebar="show_sidebar"></search-page>

                <!-- SearchPage -->


            </div>
        </div>


        <!-- set progressbar -->
        <vue-progress-bar></vue-progress-bar>

        <ads-notifcation v-if="
                         $route.name ==='discover'    ||
                         $route.name ==='series'  ||
                         $route.name ==='collection' ||
                         $route.name ==='kids'    ||
                         $route.name ==='movies'    ||
                         $route.name ==='channels' ? true : false" :show_sidebar="show_sidebar"></ads-notifcation>

        <!-- END SIDEBAR IPAD col-sm -->


        <!-- <end-footer v-if="
                         $route.name ==='discover'    ||
                         $route.name ==='series'  ||
                         $route.name ==='collection' ||
                         $route.name ==='kids'    ||
                         $route.name ==='movies'    ||
                         $route.name ==='channels' ? true : false"></end-footer> -->


        <router-view :key="getShowPagePath" v-if="getShowPagePath != null"></router-view>


    </div>
</template>

<script>
    import sidebar from "./control/sidebar.vue";
    import navbar from "./control/navbar.vue";
    import {
        mapState
    } from "vuex";
    import message from "./control/notification/message.vue";
    import ads_notifcation from "./control/notification/ads.vue";
    import footer from "./control/footer.vue";
    import searchPage from './control/search/search.vue'

    const moment = require("moment");

    export default {
        name: "default",

        components: {
            sidebar,
            navbar,
            message,
            'end-footer': footer,
            'ads-notifcation': ads_notifcation,
            'search-page': searchPage
        },

        data() {
            return {
                active: null,
                show_sidebar: true,
                activeGenre: "all",
                activeTrending: 1,
                trendingList: [
                    {
                        value: 1,
                        translate: "home.trending"
                    },
                    {
                        value: 2,
                        translate: "home.year"
                    },
                    {
                        value: 3,
                        translate: "home.rating"
                    },
                    {
                        value: 4,
                        translate: "home.likes"
                    }
                ],
                trendingActiveTranslate: "home.trending",
                genereList: [
                    {
                        value: "all",
                        translate: "home.all"
                    },
                    {
                        value: "action",
                        translate: "home.action"
                    },
                    {
                        value: "adventure",
                        translate: "home.adventure"
                    },
                    {
                        value: "animation",
                        translate: "home.animation"
                    },
                    {
                        value: "biography",
                        translate: "home.biography"
                    },
                    {
                        value: "comedy",
                        translate: "home.comedy"
                    },
                    {
                        value: "documentary",
                        translate: "home.documentary"
                    },
                    {
                        value: "drama",
                        translate: "home.drama"
                    },
                    {
                        value: "family",
                        translate: "home.family"
                    },
                    {
                        value: "fantasy",
                        translate: "home.fantasy"
                    },
                    {
                        value: "history",
                        translate: "home.history"
                    },
                    {
                        value: "horror",
                        translate: "home.horror"
                    },
                    {
                        value: "music",
                        translate: "home.music"
                    },
                    {
                        value: "mystery",
                        translate: "home.mystery"
                    },
                    {
                        value: "romance",
                        translate: "home.romance"
                    },
                    {
                        value: "sci-fi",
                        translate: "home.sci_fi"
                    },
                    {
                        value: "sport",
                        translate: "home.sport"
                    },
                    {
                        value: "thriller",
                        translate: "home.thriller"
                    },
                    {
                        value: "war",
                        translate: "home.war"
                    }
                ],
                genreActiveTranslate: "home.genre",
                index: 0,
                message_alert: {},
                footer_show: false,
                search_show: false,
                scroll_up: false,
                url: null,
                query: null,
                show_menu: false,
                collapse_sidebar: false,
                sortby_active: false,
                show_loading: true
            };
        },

        computed: mapState({
            showSearchPage: state => state.event.show_search_page,
            getShowPagePath: state => state.event.get_path_show_page

        }),

        watch: {
            activeGenre() {
                this.$store.commit("SET_SORT_BY", {
                    trending: this.activeTrending,
                    genre: this.activeGenre
                });
            },
            activeTrending() {
                this.$store.commit("SET_SORT_BY", {
                    trending: this.activeTrending,
                    genre: this.activeGenre
                });
            },
        },

        mounted() {
            //  [App.vue specific] When App.vue is finish loading finish the progress bar
            this.$Progress.finish();
        },

        created() {
            // Check user status
            if (this.$auth.isAuthenticated() === 'active') {
                axios
                    .get("/api/v1/get/check/user")
                    .then(info => {
                        /* Payment Reactive
                         *********************/
                        if (info.data.status === "payment_reactive") {
                            this.$router.push({
                                name: "payment"
                            });

                            // Language
                            this.$i18n.locale = info.data.language;
                            this.$auth.setUpdate(
                                info.data.name,
                                info.data.email,
                                info.data.language,
                                'payment_reactive'
                            );

                            setTimeout(() => {
                                this.show_loading = false;
                            }, 1000);
                        } else if (info.data.status === "confirm_step") {
                            /* Email Confirm */

                            this.message_alert = "confirm_email";

                            // Language
                            this.$i18n.locale = info.data.language;
                            this.$auth.setUpdate(
                                info.data.name,
                                info.data.email,
                                info.data.language,
                                null
                            );
                            // Get collections
                            this.$store.dispatch("GET_ALL_COLLECTION");
                            setTimeout(() => {
                                this.show_loading = false;
                            }, 1000);

                            // set caption
                            this.$Helper.set_caption(info.data.caption);
                        } else if (info.data.status === "cancel") {
                            /* Account cancel*/
                            this.message_alert = {
                                cancel: true,
                                cancel_time: moment(info.data.cancel_time.date).format(
                                    "Do MMMM YY"
                                )
                            };

                            // Language
                            this.$i18n.locale = info.data.language;
                            this.$auth.setUpdate(
                                info.data.name,
                                info.data.email,
                                info.data.language,
                                'cancel'
                            );
                            // Get collections
                            this.$store.dispatch("GET_ALL_COLLECTION");
                            setTimeout(() => {
                                this.show_loading = false;
                            }, 1000);

                            // set caption
                            this.$Helper.set_caption(info.data.caption);
                        } else if (info.data.status === "payment_step") {

                            // Language
                            this.$i18n.locale = info.data.language;
                            this.$auth.setUpdate(
                                info.data.name,
                                info.data.email,
                                info.data.language,
                                'payment_step'
                            );

                            /* payment step */
                            this.$router.push({
                                name: "payment"
                            });

                            setTimeout(() => {
                                this.show_loading = false;
                            }, 1000);
                        } else if (info.data.status === "active") {
                            /* Active */
                            // Language
                            this.$i18n.locale = info.data.language;
                            this.$auth.setUpdate(
                                info.data.name,
                                info.data.email,
                                info.data.language,
                                'active'
                            );

                            setTimeout(() => {
                                this.show_loading = false;
                            }, 1000);
                            // set caption
                            this.$Helper.set_caption(info.data.caption);

                            // Get collections
                            this.$store.dispatch("GET_ALL_COLLECTION");
                        } else {
                            this.$store.dispatch("LOGOUT_AUTH");
                        }
                    })
                    .catch(error => {
                        this.$store.dispatch("LOGOUT_AUTH");
                        this.show_loading = false;

                    });
            } else {
                setTimeout(() => {
                    this.show_loading = false;
                }, 1000);
            }


            //  [App.vue specific] When App.vue is first loaded start the progress bar
            this.$Progress.start();
            //  hook the progress bar to start before we move router-view
            this.$router.beforeEach((to, from, next) => {
                //  does the page we want to go to have a meta.progress object
                if (to.meta.progress !== undefined) {
                    let meta = to.meta.progress;
                    // parse meta tags
                    this.$Progress.parseMeta(meta);
                }
                //  start the progress bar
                this.$Progress.start();
                //  continue to next page
                next();
            });


            //  hook the progress bar to finish after we've finished moving router-view
            this.$router.afterEach((to, from) => {
                //  finish the progress bar
                this.$Progress.finish();
            });


            // Get Site Info

            this.$store.dispatch('GET_HOME_FOOTER_DETAILS');

        },

        methods: {
            SEARCH() {
                this.$router.push({
                    name: "search",
                    params: {
                        search: this.query
                    }
                });
            },

            // Show side bar for phone  760px <
            SHOW_MENU() {
                this.show_menu = !this.show_menu;
            },

            // Show side bar for pc and ipad  760px >
            SHOW_SIDEBAR_PC() {
                this.collapse_sidebar = !this.collapse_sidebar;
            }
        },
    };
</script>
