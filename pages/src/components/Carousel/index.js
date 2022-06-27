import React, {useEffect, useState, useRef} from 'react';
import './carousel.scss';
// https://www.ucamc.com/articles/402-%E5%A6%82%E4%BD%95%E5%B0%8D%E5%B8%B6%E6%9C%89hooks%E7%9A%84%E5%85%83%E7%B4%A0%E6%95%B8%E7%B5%84%E4%BD%BF%E7%94%A8%E5%A4%9A%E5%80%8Bmultiple-refs%EF%BC%9F


const Carousel = ({
    isAutoplay,delay,
    // isInfinity,visibleAmount,getDataArray,
    dataArray,carouselPostWidth,carouselPostHeight,carouselPostMargin}) => {
    const refs = useRef([]);    // refs = {current:[]}
    // const [nowIndex,setNowIndex] = useState(isInfinity ? visibleAmount: 0);
    const [nowIndex,setNowIndex] = useState(0);
    const [isAnimate, setIsAnimate] = useState(true);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [startX, setStartX] = useState('');
    const [diffX, setDiffX] = useState(0);
    const [movingStatus,setMovingStatus] = useState(1); // 1 往右滑  , -1 往左滑


    // componentDidUpdate
    useEffect(()=> {
		if (isAutoplay) {
            const timer = setInterval(() => {
                let thisIndex = nowIndex + 1;
                if(thisIndex >= dataArray.length) { thisIndex = 0};
                setNowIndex(thisIndex);
                setIsAnimate(true);
            }, delay * 1000);
            return () => { clearInterval(timer)}
        }
    },[isAutoplay,delay,nowIndex,dataArray.length,refs])

    const computedMovingStyle = (index) => {
        // let maxDiffX = carouselPostWidth / 2; //最大拖動距離為 圖片寬度的一半
		let styles = {
			translateX: '0',
			translateZ: "0",
			opacityStyle: "1"
		};
		if (!isMouseDown && nowIndex <= index) {
            return styles; // 如果滑鼠放開 或 未按下
        }
		if (!isMouseDown && nowIndex > index) {
            return {
				translateX: 0,
				translateZ: -carouselPostWidth,
				opacityStyle: 0
			}
        }
			
		if (movingStatus === 1) {
			if (nowIndex - 1 === index) {
				let z = -carouselPostWidth + parseInt(-diffX);
				styles.translateZ = `${z > 0 ? 0 : z}`;
				styles.opacityStyle = `${-diffX / carouselPostWidth}`;
			} else if (nowIndex > index) {
				styles.translateZ = `${-carouselPostWidth}`;
				styles.opacityStyle = `0`;
			}
		} else if (movingStatus === -1) {
			if (nowIndex === index) {
				styles.translateZ = `${-diffX}`;
				styles.opacityStyle = `${1 - Math.abs(diffX / carouselPostWidth)}`;
			} else if (nowIndex > index) {
				styles.translateZ = `${-carouselPostWidth}`;
				styles.opacityStyle = `0`;
			}
		}
		styles.translateX = `${-diffX}`;
		return styles;
    }
    const conputedLeft = () => {
        if(nowIndex === -1) {setNowIndex(dataArray.length - 1);}
        const leftSpan = parseInt(`${-nowIndex * parseInt(carouselPostWidth)}`);
        const marginSpan = carouselPostMargin * (nowIndex - 1) + carouselPostMargin; // 無限輪播
        return {
            carouselTranslateX: parseInt(leftSpan - marginSpan) ,
            carouselTranslateZ: -400,
            carouselOpacity: 0
        }
    }

    const changeImagePosition = (index) => {
        let thisIndex = nowIndex + index; // 無限輪播
        if ( thisIndex >= dataArray.length) {
            thisIndex = 0;
        }else if ( thisIndex < 0) {
            thisIndex = dataArray.length - 1
        }
        setNowIndex(thisIndex);
        setIsAnimate(true);
	}
    // const handleTransitionEnd = () => {
    //     // 減掉頭尾重複
	// 	if (nowIndex >= dataArray.length - visibleAmount) {
    //         setNowIndex(visibleAmount);
    //         setIsAnimate(false);
	// 	} else if (nowIndex <= 0) {
    //         setNowIndex(dataArray.length - (visibleAmount*2));
    //         setIsAnimate(false);
	// 	}
    // }

    const handleMouseDown = (event) => {
        let mobileMoveStartX = event.touches ? event.touches[0].clientX : 0
		let startX = event.clientX ? event.clientX : mobileMoveStartX
        setIsMouseDown(true);
        setStartX(startX);
    }
    const handleMouseUp = (event) => {
		let maxDiffX = carouselPostWidth / 2; //最大拖動距離為 圖片寬度的一半
		let mobileMoveX = event.changedTouches ? event.changedTouches[0].pageX : startX
		let moveX = event.clientX || mobileMoveX // 滑鼠move時 游標當下所在位置 event.changedTouches[0].pageX 為mobile TouchEnd 時使用
		let diffX = startX - moveX; // 將滑鼠按下(Down)所記錄的位置 與  游標移動當下位置相減
		let thisIndex;
		if (diffX > maxDiffX) {
			// 當移動差(diff) >  圖片寬度的一半 ，則自動切換到下一張
			thisIndex = nowIndex + 1;
		} else if (diffX < -maxDiffX) {
			// 當移動差(diff) <  負圖片寬度的一半 ，則自動切換到上一張
			thisIndex = nowIndex - 1;
		}
		// if (!isInfinity) {
			thisIndex =
				thisIndex < 0
					? 0
					: thisIndex > dataArray.length - 1
					? dataArray.length - 1
					: thisIndex;
		// }
        setIsMouseDown(false);
        setIsAnimate(true);
        setNowIndex(thisIndex !== undefined ? thisIndex : nowIndex);
        setStartX('');
        setDiffX(0)
    }
    const handleMouseLeave = () => {
        setIsMouseDown(false);
        setIsAnimate(true);
        setStartX('');
        setDiffX(0);
    }
    const handleMouseMove = (event) => {
		if (!isMouseDown) return;
		let mobileMoveX = event.touches ? event.touches[0].clientX : startX
		let moveX = event.clientX ? event.clientX : mobileMoveX // 滑鼠move時 游標當下所在位置
		let diffX = startX - moveX; // 將滑鼠按下(Down)所記錄的位置 與  游標移動當下位置相減
		let spanDistance = carouselPostWidth + carouselPostMargin;
		if (diffX > spanDistance || diffX < -spanDistance) {
			return;
		} else {
            setDiffX(diffX);
            setMovingStatus(-diffX < 0 ? -1 : 1);
		}
    }


    return (
        <div className="carouselWrap">
            <div className="carouselArea">
                <div
                    className={`carouselPosts ${isAnimate ? "" : "animateStop"}`}
                    onMouseMove={(event) => handleMouseMove(event)}
                    onTouchMove={(event) => handleMouseMove(event)}
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onTouchEnd={handleMouseUp}
                    // onTransitionEnd={isInfinity? handleTransitionEnd : null}
                    onTransitionEnd={null}
                    onMouseLeave={handleMouseLeave} >
                    {
                        dataArray.map( (item,index) => {
                            const { translateX, translateZ, opacityStyle } = computedMovingStyle(index);
                            const { carouselTranslateX } = conputedLeft();
                            return (
                                <div
                                    key={index}
                                    style={{
                                        width: carouselPostWidth,
                                        height: carouselPostHeight,
                                        marginRight: carouselPostMargin,
                                        transform: `translateX(${parseInt(carouselTranslateX) + parseInt(translateX)}px) translateZ(${parseInt(translateZ)}px )`,
                                        opacity: `${opacityStyle}`
                                    }}
                                    className={`carouselPostBox  ${isAnimate ? "" : "animateStop"}`} >
                                        <div 
                                        ref={(element) => {refs.current[index] = element}} 
                                        //Adds the current element to our refs.current array
                                        className="carouselPostBox-image" style={{backgroundImage: `url(${item.image})`}} />
                                        <div className="carouselPostBox-title">{item.title}</div>
                                        <div className="carouselPostBox-desc">{item.desc}</div>
                                </div>
                            )
                        })
                    }
                </div>

                <div style={{ display:'inline-flex',perspective:'600px'}}>
                    {
                        dataArray.map((item,index) => {
                            const {translateX, translateZ, opacityStyle} = computedMovingStyle(index);
                            const { carouselTranslateX } = conputedLeft();
                            return (
                                <div 
                                key={index}
                                style={{
                                    width: carouselPostWidth,
                                    paddingRight: carouselPostMargin,
                                    transform: `translateX(${parseInt(carouselTranslateX) + parseInt(translateX)}px) translateZ(${(parseInt(translateZ) * 2) / 3}px )`,
                                    opacity: `${opacityStyle}`
                                }}
                                className={`carouselPostBox-bar ${isAnimate ? "" : "animateStop"}`} />
                            )
                        })
                    }
                </div>
            </div>

            <div onClick={() => changeImagePosition(-1)} className="controlLeft">
				<i className="fa fa-angle-left" />
			</div>
            <div onClick={() => changeImagePosition(1)} className="controlRight">
				<i className="fa fa-angle-right" />
			</div>
        </div>
    )
}
export default Carousel