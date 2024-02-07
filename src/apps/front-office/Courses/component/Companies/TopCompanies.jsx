import Marquee from "react-fast-marquee";
import classes from "./TopCompanies.module.css";
const imageCompanies = [
  {
    image:
      "https://seeklogo.com/images/B/boat-logo-F00EF9AF96-seeklogo.com.png",
    width: "150px",
    height: "50px",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/23/OYO_Rooms_logo.png",
    width: "150px",
    height: "50px",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo_%28standalone%29.svg/2560px-Paytm_Logo_%28standalone%29.svg.png",

    width: "150px",
    height: "50px",
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/b/ba/CEAT_Logo.svg",
    width: "150px",
    height: "50px",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/sco/thumb/e/e4/Unilever.svg/1859px-Unilever.svg.png",
    width: "100px",
    height: "80px",
  },
  {
    image:
      "https://i.pinimg.com/736x/6b/ec/c0/6becc01a1b399a4ee8fc6916a9de0083.jpg",
    width: "200px",
    height: "60px",
  },
  {
    image: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png",
    width: "180px",
    height: "90px",
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/ar/d/d7/Puma_Logo.svg",
    width: "180px",
    height: "90px",
  },
  {
    image:
      "https://logos-world.net/wp-content/uploads/2020/09/Nestle-Symbol.png",
    width: "190px",
    height: "100px",
  },
  {
    image: "https://1000logos.net/wp-content/uploads/2021/08/Xiaomi-logo.png",
    width: "180px",
    height: "100px",
  },
  {
    image: "https://1000logos.net/wp-content/uploads/2023/03/HCL-Logo-1976.png",
    width: "180px",
    height: "110px",
  },
  {
    image: "https://1000logos.net/wp-content/uploads/2021/05/Sony-logo.png",
    width: "180px",
    height: "100px",
  },
  {
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaYAAAB3CAMAAAB/uhQPAAAAwFBMVEX////EJCszNUUsLj8lKDswMkNtbnidnqUpLD7CEhwhIzfDICgdIDXa2t0iJTjCFh/uycrhlpnJO0H34+O6u8DGLDP++vqBgon67e1AQlHy1NXbgYQUFy/x8vLp6ut5eoM9P05eX2vQ0NOysrhoaXPAAAnAAADGxsrBBRTj4+XT1NdJS1j88fLin6HlqqyTlJvUbHDNUFTQXGDqvL5OUFzdjI+ztLiOj5bRZWnINz3WdnnKRUrtw8UPEyzkp6nQVVqd3lR4AAAUuElEQVR4nO1d+V/iPhOWHtBSaFG0HMqpCAiKq3i76///X71tMzkmSaECu939vn1+2P1Y0itP5sjMJD06+gfx+JX3ExTYhuXtmTu7y/spCmxE8+nM9UpeEOb9IAXS0X0vRSRFcJ/yfpQCaejeB0FCUoRZM++nKaBF49VlJJVKwb30czuXhyogoe0GJRGzBvr1+KwQr78BjzPEUsn7wb2I5pPnuq85PlwBincsTJE4Uae8+z6L/Yrrz1yfr0CM9psn0eS9Jeao8TAJ4O+8n7HAUWNSkhE75Z8f10zKZrd5P2QBRedF4lM6fpuIMiY76ctlPs/6/4vliazzYp4CfBA76e1jV3ba/230/vD9dgj0dF2VJRUz7kU0z0uud9094FPnjPFVZ335B+83Ly/WL/1vnnSeiSbmpHfvvdj58z4O/fDjQfkyl3Di1DJtu1b5Y/ebG45t++vvSXD4odF5OnFKvIjGKw0qHTqSXvEdpzY67DWzYWQbhmEP/5jie/Gj+xm178lvV3Ug9OJ01gw/H2astVc6aAypbsWddXF6yGtmhJHArv+p+5XN+H5O61snHWfSeRGChwfk/Lnn+ELLx32e/bKaPPvLPtfYEf8ETRl1Xiw/UktX9CLax2fX+4T+KtYOz34Y/As0NTOzpBEvZvGbT4HrBQ97PHtB00bczbbzkQbqRUDkrzTZQ+0VNG1Edp2nwnuLYxGNBxpU8s52d6gLmjahndWB0CLyIh5PJtxV3CM/X9C0CXKq6bt4c5E0utiLCG8zexUFTZvwkHHWlAZJZQZiAjFy/iaZQ38FTRsQqjmM/TBjXgQpJ5s0Nt1eQEHTBuyr8xR4HyTDQcvJvI+MXkVB0wac76nzVMyOj1ClUtaEYkHTBgR7uON6eKXu54Pg/GUN/RU0pUOTXj8ATzMkou57pkcpaErH016zpoyYZfIiCppSESolRb8DYtVfOgqaUtG9/gMsReL0K8OzFDSlgqeavC3QdH4Q6L1EL5D9Eu8sgxeRO03GtE+wNYvbq4+n45ttzfo30+l4rvsllaZedIbaPPyC/vRmpZONOJtMZlLnT16f7nV+ovt2/vQmEYi8iH69PtdoQaBpAH21vaBjPo5e6rt1H3IPJN0INBlD8u9w3Zqmc9C/HA1Ny7fM4egy/e60lbEYTJUf02iaLvyqNVCaN2Fu6500wm1o3tHlT6DI4kKjphped58iCkIpBMUTUeOXxdC2jU75VO4IQhPDsDN43sBBfbU2nLgb1i83yo+V9UipM5i31ldKh62GRueS02RTONVORU9UbzWsmjZpbVaHaa0qvJXjr+X7ptA0TcoM1BKJWxd0Urb4aPv2jPV+QELhSu2YRzKFUtydRpDGI8uJSIr6w/EXFSxSlCbWV1EvtLQ6IxqrA9OybdLaskaSomjVonPL0hlDyzYtqdCiVY1uUzs9MlTY1bVG/RyNF76NW+kM2s1aatXCbOppGjvJSaZStfNKej3INrGJ0HylsSWXONnhgyRONFGIKjS9EhkHK8cUHt7HryhJU9LEMrRVWaeGIzYzrReR8fnP+GANU7KKi3nMBTo2T5i2OzqaosaOWvlzappyK0PVaVNbblUdIZ60NJGn0dDUBM/APdb1hR5PwJMLxZVyvYsLzgLy9D2i8wZojMUdIQ5YDU3xQCyraqVSs6Vm/pXQ6pnUvmAdvyYjFQ2MU5/cQ09TNI7kMTJ15BvH4iwrXV0rS3xALU39IShJX66toun179BEay/pOV0cxgCdx6we3CAJ6w185RVNQalpaYpeUNEBldrmVqcJTTaSnB65OO6CAZHJYQpNkTBjSaHjPTY4lkUlxlzggdSnrUzfciwq9lWxYkpDU28BLZWxcXQf7EATJKjoShqpFpNe6g4JWRDrvEtN75prft0UmgzZ9SEskN7iw9bi79y7ID+KkjMlQwSLWIdI2IDSFPV9Ap8yIFVYjkxK36JVqYyoBvex8roi/W37o8vpeDqw4Bl9gXKVpnAELFVXcn+3zzzct8umCDgf/uLrL9okE0hXaDwhn24CR7+QzvuKRKxPWTItx2EdUXuWaTLlvjIu0JimyiHqLDMesZSpC65ASYvqs3DWilzcNoRjdXIH/5nSdDklOC1f2Ar5EdXwBtaCqLn5CJSmLTo6YzJITAOep74gtxFNjkrTFYzRqjqX+mTuAND0eT1huIa4dtMlB6/fbqmZvk3Oc8FX+BS1nndCGoUoupEUSLTocCmP5/XnEZgX4VFh3rSCvnou1+jgHYpP/QKq0+rELn0/mmpAqw5v4oCUcCxovws9CqbJqqtRiPqQ3Ns2hTkBMW+GxX3IAelcS1RoROTsDpPDHty7ykebQhO1B746aWI6j9HUcMUOB5rO2Az4BCRlmbgH3g/yVyhGKGjFCk42TrrRw9KhCGP8lNhZQQsRmqrcevRHMMREp40KU5WdWIFXrLFuIP0vshv+BIHxBREbkA61dcGiHtzG595en1zDFvQ0sC+aQWhlCn5FnciX8KoyTS069K6OFPBVTZloiiwMzcOSsPo1/CWuYaMZdbSuLcnngkXhr01UyE8+xBSamJoXLQpcxxGmRaAteas+qE/e7VOmcYVLEctmXmljejfkPoKqeoY7iyoYTJ4xl1phG1iWBUyiaQVXcXRrNBpsxGekieRlj+iclk5ZBcnxAnIoREGkIC41J4rIFhR05cJyfgoGU0MTiI4oFyACjvhCI9LKZAeIbyC4dSvqntgOOzbnA0dDE/UXLHYA3gD7daD1OHUr9S2OLn3p+pgmqg5kl5GAp9ez0kTLGpaJd0cnxUtunOghZK+IiJEns0Rvs155EUemhibavRf8+YmBsJA/BEbmgo1pxTitmUvIGz37TD3paIKfLWaciPtuYr1EtJ5gdkgrH11qCgOCtUI0XVLjauhCLiGPE2SmCYIJJHrheaD1uFdHBQx5f95Z7CWSwalM3QToaLoBAlhf9YigVFEgZy7baKKLuFvX43MBbpxIhyaeh46mMQgK67srU+I+BhFk4aEJAybq8TG5PW8l0jSt0tifNo8irGrKSlMpgBUYRBCpIfrFTrsmbnuIIkVExK52omlu2FiawLTXUDf0O5IHDqf5tNWU08S7GUxTbOS0NBG7aLGDeprMb9D0jBslNI0typIadIohRHl2pIm6dU3qfVPnD0cmiIiRsbspm6SjCQhQaeprWgleGVFyTHJWfObMRGxO/K/kpPxoqhuUJXGWJ0AY8TvSxCrw2DQZkrQ4zjdLRIyQYA9TQt5H36RJJ00CTZJxGglBNmqcwHFL3MHcaJoPaSQjZeGvuJJzR5pYyIHSAoGJEIUgoFoZHtUcpebbDkkTMdrU9+vx8BJv1RIct7xo6kGEQhMiAvwSKNmVJhcKJcG1p2E+KewKItaBOfwoLdd3SJqoTSPNwDRBngD6echNU0402WUayEtfySpGTHeliZX1k2kSvcwt0nnXkNmgkVezmrKA+5A0UeNEjhDTZC86yX/DRFWDaSIPkw9NPHJspe110BZH/K40seQSCTrQlbivOATBeo6FW/UCdVCaiHEiwYBwBHM20jsXScfDbIV4wTnRxGAbKSrm7iA00VTtZ3yid0b+aKMyJKoY41k/HTympROog9IExilx6yDXVOuvyNQzGbpgmkh4Jm+acCReACop2ZkmFoiIcxv0Dxx2FbbMGbMUu+1fqR7fQWmaD7lxIqYpchZIdyUdHbJcU4zcaZLSyhR4VdPONMGue4R1mna/RzrPE+56s2DzF8dQBOqgNNGoR3yIKcC+QWofoqvNoefIKTnSBBrGkSpsCPCI35kmVh0e6VBaMom3UAzQWtxei2XxbL8sCdRhaXph0+mQM0Z6ulZnpglCQfnRZNMkp6ULQuAN9HanKYB9Vpolj7p9DTwCpCr/0yGrCXKGOHJ0WJpA03VCWpsQn0JuEftVyDTlR5Nt3EC6VCw3oMCJhj1ooksDj3541J04T9V5CeZl5knYuHDwsDT12cyJEtaj/RWpP8io0rRQXjTZ5pQVH/hqtEha1bQ7TcwJP55B9ByXsCgbmke45MV6F9sSGbvTRGO9l4L6O+pR4wSmiZ6RE022E59HyzRspadwmcleNNFM4QzKj3EZrKvbdaW+5kk6IXR0YJpYWE9wJqB/anMwTfQyOdFEinB7MMtVwnryqqY9aGIVESdwDbSuLW095wtVfGIy+sA0UTe8LrjmzDhh05QTTTT2QPOCNSncKa9q2ocmmil8h5+wzkvbampMq4sveNccmKY+GbEODc0nB28Id2sSMmdplXxoYmctlCqrBPJKzj1oYoEIKOTrIjmdpe401YPCNKUA7GA0QbcauAug1FEqG8qZJlr4gt8q/CFvi7cHTR4WmF9Y521Y6UHe2jYYA4emScgF8t/Q/J9dJWeadBVUcqJhX5rwQkCk87xNn7+rQ6SNOXuHpknIrPNkoFgBbS9ogaiOprp9MJputtF0AyagJpZ43Eo6by+asDPXxNPmTRt3hMQ+8IrRQybZk6YiIzS1fiNwxxWujiaYePHKIiAAR3VGSmUR8SvRpaCoXS5ZEV4VFh2IBczKkqT9aEKLox5xhf/GncoHQq4hRjaaOhukSaqHGXEFx+8iJHJ54ktHE1V67EBLqTSMzyR35jSReQB+izpIk1QAJjSCNKZ4qKmsd96LJq8kPBAKvG/ZZ6Aljc5MNNHCOFwARvioSWExwTjxKf4V546X7Olooj47OwAuI6qmg5JMoRSZtMIyRxcxsFYKTbTw1eZ1r+qmoXvRhMJ2OJ6Ht0Cctl7EfgCl901pAhHB5ZSXcjUf3JArOC593DgJawM0NNUhNluRL4fcZuBSWF8D7oJYzgW10kpxsviqrGad3e8VhyD2p4mz8YlomiGdt/rpWOJaFnAhnO/ZJpowF8MXEKATuh2OM5qEuuUxOyj0t0oTXVHgCLJDFyvwJ5wqRfyRyw/11OzEENLWgoSpNMH23tF5MNZQvx+CJpq1VY5/iN+kGccrFYSVQCFoH77aIhtNY7muPxrSUJ+qVOewui/RPWM0CWNGoWlqwORYVF4vMOliNu2ZRk1FFUxDdA68SH1NVwzJC2fwq8Icl7pUmg309qOJ1YFJ24kFaDN50pfmAgZLH6a3tvm9eRMrB68qq05+KglhpuDE6DPjjpsmugytMj2N8VxZwOorvMCMLaSrLS7r/XiNFgwC5FWAW2fYteHq+bRCF3JplqHhVz2F88CXv1d03r400RIvqdp1gr5zB2kV21rd9Ho3K7pyVVjBlZGmU6p7hpfRC/WfDeBCWhIdgxknsTyb72vAj0Ezq5rAp+sw5S0aKtRNtP1arUYznLZVT2ll+T5boWtYwoonHU3UMXWStQTq9+n2ponNYlG1K6nw5112wfqiVqvS3KDtcLOfkaajskN7oYY6S1OnSQf2UDg2prQKroChR01Wo1eWrpUc2S5vbaWlCVarGVasQhuaTUP3pKk0gRvhsKu02cRA9/A/hSfNSlO/oxR8xCpGl6Re4wrKBD1aDizcSEuSrbB01BupL1FTSiF7I2XJvlFDYVUtTTSQlYwfzffp9qWJxsGbmgp/jnDhKA9/IQ6xrDSxhbFil+prNCu6bQaAO3GGTFfmile0DM3qkd6gipvaKksZWkHaSxpZMAmLtbd2A709aaJB8l84Iyh/e7C3loai9GGrzDQdzRfSlUxTvyAH1n/heSu49OKadnk/ENv0zZa+wrFiWLxtxKV+IYXcShpEq6ohLb9O8JIcjtlr6PZWo/pJnPjS6Db6uBOt8cJTr0lbcxTtR06AB5kt77hEZg4XeKegxK4q28P0WnTjJiJKo5Sd8EIog0AHSdoAexwvhm8xOMbiqpK6q9X8ZVhzYP+pYQqXcavOhla9RdV0VAUQlmuWX43HrnbTUNhaaolsC8xakWMI6q2B9oin5cdL5I67up0OT9dVh26xtZA3z5rHcxVHmqOOTcu0HHWPr3HZ9pNLmZa/fk4NSsVpYsXGxAbGruHhMK8LmG/eKa9/Olh3OovR4HTTLnH9aWu9SGvVW43Kup2rppVK8q76TUODj8Yy7H5Im6sdL5dNyX0P7pvL5S+8kz+Ng0ubDGhTTb1p9IaG0VkPNBvWTReWs5YnP/XWlX4bsPllebRer69W402Rw0GkceTC3/nIsTp7fvCx18vyhbtsrVSkfZPTm529zZSIbHA2k3VkMDvxpIb60ET69yH783nKKOyNVbHZiHD7HrJz3f6Q9a07S+YLJdXE+1UnZtpj8gahsKoJfzx3Y6qpwBbovkO8J2jkVQpB/Ic+ivvH0f7ORslpO/FKoDoPhyBKmx+kwCbcpeo8maJgdl36+Pr6CK4V8yS1BJ139KBxEwvshK9sOs+blc4fYXbavnt33Q2nsWJ/JHnZ9vEvoEV4LW9SrcXs7Q55UMvbUroUunzpjHg0j9f7zyASjbfZJtmIRck9Vtzc9vsk5aTgCxrjaXDmT6AV0GPZePrhuulCFbxp9dWdnlzPAweijd3xvT4nXSBB2Lx9OEtRf8FHSqHqpzqJ8rwZ4xRVQXieHHYtsBuaj/cngSoh3klqOfEn9s491zv7OGYVr7jya5+PSRfACLtPH94Mdb4XbPDQcHm4d9cVGP3EOYy73//0/1fo3n0FgqGi20/qISYqAmR9lnhz+E0V/gV2w/LzPQDvj+57nAJhaiSpNfzhEro0rcCB0T0+iaMNsy3K6pypNrzB/AOeVhVh19+H9t39bLYlL8BX3Ij1KM0TKZy0ucK/wJ4It3UvX8vBPyXUfpL9xULn5Q3hG3cnn+12s3v3WlK8+iLsmjeESaznvr2dBbpJ8qzQeTkDVeKlZKNwhX+BHLDUlMzKwBX+BXLAcnOKkOi8z+3XKfBbkYGmTJ+4LfBbkUHpZf+cZIHfBVzMr9d5Rdg1d/y63pqjdwudlzuatw/KN78lnadW+BfIAeHde2mSXk6hrfAvkAfCxtPHLKWcQl/hXyAfhM3bV0+j/oqw61+H5uP9m8zU9z50XODPoN04/3BdIbZXVPj/pQi7xz9KVKiEDVcK/HVoPj6UEpciKFJNfzeWn+cl150UFf5/P7q3J3k/wm74HwtADr1iYqZoAAAAAElFTkSuQmCC",
    width: "210px",
    height: "70px",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Reliance_Jio_Logo_%28October_2015%29.svg/2048px-Reliance_Jio_Logo_%28October_2015%29.svg.png",
    width: "100px",
    height: "80px",
  },
  {
    image: "https://1000logos.net/wp-content/uploads/2023/06/Airtel-logo.png",
    width: "150px",
    height: "80px",
  },
  {
    image:
      "https://ttimehindi.com/wp-content/uploads/2022/12/About-Dunzo-App-Company.png",
    width: "180px",
    height: "60px",
  },
];
export default function TopCompanies() {
  return (
    <div>
      <div className={classes.back}>
        <div className={classes.up}>
          <Marquee speed={80} gradient={false}>
            <div className={classes.image}>
              {imageCompanies.map((item, indx) => (
                <span key={indx}>
                  <img
                    src={item.image}
                    width={item.width}
                    height={item.height}
                  />
                </span>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
}
