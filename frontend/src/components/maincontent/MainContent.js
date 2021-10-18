const MainContent = (props) => {
    const { children } = props;
    return (
      <main class="row border mg-t">
        <>
          {children}
        </>
      </main>
    );
  }
  
  
 export default MainContent;