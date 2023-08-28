<main>
  <p>Does Docker run on Linux, macOS, and Windows? You can run both Linux and Windows programs and executables in Docker containers. The Docker platform runs natively on Linux (on x86-64, ARM and many other CPU architectures) and on Windows (x86-64).</p>

  <p>Docker Inc. builds products that let you build and run containers on Linux, Windows and macOS. What does Docker technology add to just plain LXC? Docker technology is not a replacement for LXCopen_in_new. "LXC" refers to capabilities of the Linux kernel (specifically namespaces and control groups) which allow sandboxing processes from one another, and controlling their resource allocations. On top of this low-level foundation of kernel features, Docker offers a high-level tool with several powerful functionalities:</p>

  <ul>
    <li>Portable deployment across machines. Docker defines a format for bundling an application and all its dependencies into a single object called a container. This container can be transferred to any Docker-enabled machine. The container can be executed there with the guarantee that the execution environment exposed to the application is the same in development, testing, and production. LXC implements process sandboxing, which is an important pre-requisite for portable deployment, but is not sufficient for portable deployment. If you sent me a copy of your application installed in a custom LXC configuration, it would almost certainly not run on my machine the way it does on yours. The app you sent me is tied to your machine's specific configuration: networking, storage, logging, etc. Docker defines an abstraction for these machine-specific settings. The exact same Docker container can run - unchanged - on many different machines, with many different configurations.</li>

    <li>Application-centric. Docker is optimized for the deployment of applications, as opposed to machines. This is reflected in its API, user interface, design philosophy and documentation. By contrast, the lxc helper scripts focus on containers as lightweight machines - basically servers that boot faster and need less RAM. We think there's more to containers than just that.</li>

    <li>Automatic build. Docker includes a tool for developers to automatically assemble a container from their source code, with full control over application dependencies, build tools, packaging etc. They are free to use make, maven, chef, puppet, salt, Debian packages, RPMs, source tarballs, or any combination of the above, regardless of the configuration of the machines.</li>
  </ul>

</main>