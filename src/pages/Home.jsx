import React, { useState, useEffect } from "react";
import fundo from "../assets/ferenc-almasi-X7gKtI54ON0-unsplash.jpg";
import Contato from "./Contato";
import { TabButton } from "../components/TabButton";
import { useLocation, useNavigate } from "react-router-dom";

// 🔗 Conversão URL real → aba
const pathToTab = {
	"/": "bemvindo",
	"/sobre": "sobre",
	"/projetos": "projetos",
	"/contato": "contato",
};

// 🔗 Conversão aba → URL real
const tabToPath = {
	bemvindo: "/",
	sobre: "/sobre",
	projetos: "/projetos",
	contato: "/contato",
};

const Home = () => {
	const location = useLocation();
	const navigate = useNavigate();

	// Define a aba inicial pela URL do navegador
	const [tab, setTab] = useState(pathToTab[location.pathname] ?? "bemvindo");

	// Atualiza a aba se o usuário digitar a rota na barra do navegador
	useEffect(() => {
		setTab(pathToTab[location.pathname] ?? "bemvindo");
	}, [location.pathname]);

	// Troca de aba + muda URL real
	const handleChangeTab = (newTab) => {
		setTab(newTab);

		const newPath = tabToPath[newTab] ?? "/";

		if (location.pathname !== newPath) {
			navigate(newPath);
		}
	};

	return (
		<>
			<section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
				<div
					className="absolute inset-0 bg-cover bg-center blur-sm"
					style={{ backgroundImage: `url(${fundo})` }}
				/>

				<div className="w-[800px] h-[500px]">
					<div className="flex justify-center mt-5">
						<div className="w-full max-w-5xl rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.25)] overflow-hidden border border-[#d7d7d7] bg-white/60 backdrop-blur-xl">
							{/* ─────────── Barra superior do Safari ─────────── */}
							<div className="bg-[#ebebeb] border-b border-[#cfcfcf]">
								{/* Botões macOS */}
								<div className="flex items-center gap-2 px-4 py-2">
									<div className="w-3.5 h-3.5 rounded-full bg-[#ff5f57]" />
									<div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]" />
									<div className="w-3.5 h-3.5 rounded-full bg-[#28c840]" />
								</div>

								{/* Abas */}
								<div className="flex items-center gap-1 px-4 pb-1">
									<TabButton
										label="Bem-vindo!"
										ativo={tab === "bemvindo"}
										onClick={() => handleChangeTab("bemvindo")}
									/>
									<TabButton
										label="Sobre mim"
										ativo={tab === "sobre"}
										onClick={() => handleChangeTab("sobre")}
									/>
									<TabButton
										label="Projetos"
										ativo={tab === "projetos"}
										onClick={() => handleChangeTab("projetos")}
									/>
									<TabButton
										label="Contato"
										ativo={tab === "contato"}
										onClick={() => handleChangeTab("contato")}
									/>
								</div>

								{/* Barra de endereço Safari */}
								<div className="px-4 pb-3 flex items-center justify-center">
									<div className="w-full max-w-xl bg-white border border-gray-300 rounded-full px-4 py-1 flex items-center gap-2 shadow-inner">
										<span className="text-green-600">🔒</span>

										{tab === "bemvindo" && (
											<span className="text-sm text-gray-700">
												https://marcela.dev
											</span>
										)}
										{tab === "sobre" && (
											<span className="text-sm text-gray-700">
												https://marcela.dev/sobre
											</span>
										)}
										{tab === "projetos" && (
											<span className="text-sm text-gray-700">
												https://marcela.dev/projetos
											</span>
										)}
										{tab === "contato" && (
											<span className="text-sm text-gray-700">
												https://marcela.dev/contato
											</span>
										)}
									</div>
								</div>
							</div>

							{/* ─────────── Conteúdo das Abas ─────────── */}
							<div className="p-12 text-center min-h-[300px] transition-all duration-300">
								{/* Bem-vindo */}
								{tab === "bemvindo" && (
									<div className="fade-slide">
										<h1 className="text-4xl font-bold mb-4">Olá!</h1>
										<h2 className="text-2xl font-bold mb-2">Seja Bem-Vindo!</h2>
										<p>Me chamo Marcela e sou estudante de</p>
										<p className="text-2xl font-bold text-purple-700 mb-6">
											Análise e Desenvolvimento de Sistemas
										</p>
									</div>
								)}

								{/* Sobre mim */}
								{tab === "sobre" && (
									<div className="fade-slide">
										<h1 className="text-3xl font-bold mb-4">Sobre mim</h1>
										<p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
											Meu nome é Marcela, sou apaixonada por tecnologia e estou
											estudando para me tornar uma desenvolvedora completa. No
											momento curso ADS na Infnet. Amo criar interfaces bonitas
											e aprender programação. Estou buscando meu primeiro
											estágio!
										</p>
									</div>
								)}

								{/* Projetos */}
								{tab === "projetos" && (
									<div className="fade-slide">
										<h1 className="text-3xl font-bold mb-4">Projetos</h1>
										<p className="text-gray-700 mb-8">
											Alguns dos meus projetos:
										</p>
										<p>Em breve</p>
										{/* Adicione seus projetos aqui */}
									</div>
								)}

								{/* Contato */}
								{tab === "contato" && (
									<>
										<div className="fade-slide">
											<h1 className="text-3xl font-bold mb-4">Contato</h1>

											<p className="text-gray-700 mt-2">
												<a
													href="https://www.linkedin.com/in/marcela-monteiro-475b77216"
													target="_blank"
												>
													🔗 linkedin
												</a>
											</p>

											<p className="text-gray-700 mt-2">
												Ou se preferir pode me enviar um e-mail clicando na seta
												abaixo!
											</p>
										</div>

										<div className="mt-6 flex justify-center">
											<span
												className="
                          text-5xl font-bold
                          bg-gradient-to-r from-[#2e026d] via-[#6b21a8] to-[#3b0764]
                          bg-clip-text text-transparent
                          animate-bounce
                        "
											>
												<a href="#entrecontato">⮟</a>
											</span>
										</div>
									</>
								)}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Seção real de contato lá embaixo (scroll suave funciona aqui) */}
			<section id="contato">
				<Contato />
			</section>
		</>
	);
};

export default Home;
