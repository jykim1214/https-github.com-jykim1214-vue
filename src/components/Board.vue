<template>
    <div class="section">
        <h2 class="text-center">글 작성</h2>
        <div class="container" style="bord:1px">
            <div class="row">
                <div class="col-md-12">
                    <form class="form-horizontal" role="form">
                    <div class="form-group">
                        <div class="col-sm-2" style="width:100px">
                            <label for="inputEmail3" class="control-label">제목</label>
                        </div>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputEmail3">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-2" style="width:100px">
                            <label for="inputEmail3" class="control-label">이름</label>
                        </div>
                        <div class="col-sm-10" style="width:300px">
                            <input type="text" class="form-control" id="inputEmail3">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-2" style="width:100px">
                            <label for="inputEmail3" class="control-label">날짜</label>
                        </div>
                        <div class="col-sm-10" style="width:300px">
                            <input type="password" class="form-control" id="inputEmail3">
                        </div>
                    </div>
                    </form>
                </div>
                <div class="col-md-12">
                    <form>
                        <div style="padding-bottom:20px">
                            <label>내용</label>
                            <textarea class="form-control" rows="10"></textarea>
                        </div>
                    </form>
                </div>
                <div class="form-group">
                        <div class="col-sm-2" style="width:100px">
                            <label for="inputEmail3" class="control-label">첨부파일</label>
                        </div>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" id="inputEmail3">
                        </div>
                        <div class="col-sm-1" style="width:100px">
                            <button type="submit" class="btn btn-default" style="width:100px;">선택</button>
                        </div>
                    </div>
            </div>
            <div class="row text-center">
                <button type="submit" class="btn btn-default" style="width: 100px;">제출</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'board',
  data(){

  },
  methods:{

  }
}
</script>

<style>
    div{
        text-align: left;
        margin-top: 10px;
    }
</style>