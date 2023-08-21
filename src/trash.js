  // const stackRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   setCards(prevCards => [...prevCards].reverse());
  // }, []);

  // const handleSwap = (e: any) => {
  //   const card = stackRef.current?.lastChild as HTMLElement;
  //   if (!card) {
  //     return;
  //   }

  //   card.style.animation = 'swap 700ms forwards';

  //   setTimeout(() => {
  //     card.style.animation = '';
  //     setCards(prevCards => [prevCards[2], prevCards[0], prevCards[1]]);
  //   }, 700);
  // }

  // className="stack flex gap-8 relative items-center justify-center" 
  // onClick={handleSwap} 
  // ref={stackRef}