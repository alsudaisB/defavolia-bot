FROM archlinux:base
RUN pacman -Sy && \
    pacman -S sudo git npm ffmpeg chromium --noconfirm
RUN useradd -l -u 33333 -G wheel -md /home/gitpod -s /bin/bash -p gitpod gitpod \
    && sed -i.bkp -e 's/%wheel\s\+ALL=(ALL\(:ALL\)\?)\s\+ALL/%wheel ALL=NOPASSWD:ALL/g' /etc/sudoers
ENV HOME=/home/gitpod
WORKDIR $HOME
USER gitpod
RUN sudo chown -R 33333:33333 "/root/.npm" && sudo npm install
