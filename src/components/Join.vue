<template>
    <div class="container">
        <form>
            <h2>회원가입</h2>
            <div class="form-inline">
                <label for="id">아이디: </label>
                <input type="text" class="form-control" id="id">
            </div>
            <div class="form-inline" >
                <label for="pwd">비밀번호: </label>
                <input type="password" class="form-control" id="pwd">
            </div>
            <div class="form-inline" >
                <label for="pwd">비밀번호 확인: </label>
                <input type="password" class="form-control" id="pwd">
            </div>
            <div class="form-inline" >
                <label for="name">이름: </label>
                <input type="text" class="form-control" id="usr">
            </div>
            <div class="form-inline" >
                <label for="e-mail">이메일: </label>
                <input type="email" class="form-control" id="email">
            </div>
            <button type="button" class="btn btn-light" style="margin-top:20px; text-align:center">회원가입</button>
        </form>
    </div>
</template>

<script>
    export default {
    name: 'Join',
    data(){

    },
    methods:{

    }
    }
</script>

<style>
    .form-control{
        margin-top: 10px;
        text-align:left;
    }
    label{
        text-align:left;
        width:100px;
    }
    #id, #pwd, #email, #usr{
        width:40%;
    }
</style>