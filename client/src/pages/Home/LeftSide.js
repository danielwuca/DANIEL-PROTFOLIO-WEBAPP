import React from "react";

function LeftSide() {
  let showMail = () => {
    alert("My Email: danielwuca156@gmail.com");
  };

  return (
    <div className="fixed left-0 bottom-0 px-10 sm:static">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="https://www.facebook.com/profile.php?id=100087893165395"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="ri-facebook-circle-fill text-gray-500"></i>
          </a>

          <button onClick={showMail}>
            <i class="ri-mail-fill text-gray-500"></i>
          </button>

          <a
            href="https://www.linkedin.com/in/zhenyu-wu-a3a989257"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="ri-linkedin-box-fill text-gray-500"></i>
          </a>

          <a
            href="https://github.com/danielwuca"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="ri-github-fill text-gray-500"></i>
          </a>
        </div>

        <div className="w-[1px] h-12 bg-gray-500 sm:hidden"></div>
      </div>
    </div>
  );
}

export default LeftSide;
