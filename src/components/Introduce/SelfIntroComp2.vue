<template>
 <div className="Maincontent_SelfIntro">
            <div className="Intro_box_object">

                <p>자기소개서</p>
                <hr />
                <p> 안녕하세요. 데이터로 기업의 그림을 그리고 싶은 데이터분석가 유망주 김선우입니다.</p>

                <p>저의 본전공은 경영학과 입니다. 경영학과 강의에서 수업을 들으면서 느꼈던 점은
                    현 시대에 데이터는 이 시대의 전부일 수 있다는 생각이 들었습니다.
                    마찬가지로 기업과 데이터의 사이는 끊을 수 없는 사이가 되었습니다.
                    실제로 소비자 구매 목록을 보기 위해서는 고객 정보 데이터베이스에 들어가서 확인해야합니다.
                    이처럼 전 저의 미래 발전과 경쟁력 있는 사람이 되기 위해서는 데이터에 대해 배워야한다는 것을 느꼈고,
                    데이터에 대해 배우기 위해 컴퓨터공학과 복수전공을 선택했습니다.</p>
                <br />
                <div className="data_image">
                    <img />
                    <img />
                </div>

            </div>

        </div >
</template>

<script>

</script>

<style>
.Maincontent_SelfIntro {
    padding: 5% 10% 5% 10%;
    display: flex;
    flex-wrap: wrap; 
    justify-content: center;
}

.Intro_box_self {
    /*background-image: url('../../Component/background_image_url.png'); */
    padding: 20px;
    margin-right: 15px; 
    border-radius: 8px;
    box-shadow: 0 0 20px rgb(129, 129, 129);
    width: 350px;
    white-space: pre-wrap;
    margin-bottom: 20px;
}

.Intro_box_self p {
    white-space: pre-line;
    margin: 0;
    line-height: 2.0;
    font-size: 18px;
}


</style>
