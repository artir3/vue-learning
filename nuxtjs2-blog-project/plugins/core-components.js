import Vue from "vue";

import AppButton from "@/components/UI/AppButton";
import AppControlInput from "@/components/UI/AppControlInput";
import PostList from "@/components/posts/PostList";
import PostForm from "@/components/admin/PostForm";

Vue.component("app-button", AppButton);
Vue.component("app-control-input", AppControlInput);
Vue.component("post-list", PostList);
Vue.component("post-form", PostForm);
